//import utils from "../node_modules/decentraland-ecs-utils/index"
import { getUserData, UserData } from '@decentraland/Identity'
import { Props, uiSystem } from './item'

type RewardStatus =
  | 'error'
  | 'campaign_not_started'
  | 'campaign_disabled'
  | 'campaign_finished'
  | 'unauthorized_address'
  | 'without_stock'
  | 'transaction_ready'
  | 'transaction_pending'
  | 'transaction_dropped'
  | 'transaction_failed'
  | 'transaction_success'

/////// CONNECTION SETUP

const apiUrl = 'https://gav.decentraland.org/api'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const idNum = Math.floor(Math.random() * 500)
let id: UserData = {
  userId: idNum.toString(),
  displayName: 'fail',
  publicKey: idNum.toString()
}

export async function getUser() {
  return new Promise((resolve, reject) => {
    executeTask(async () => {
      try {
        id = await getUserData()
        return resolve(id)
      } catch {
        log('failed to reach user ID')
        id = {
          userId: idNum.toString(),
          displayName: 'fail',
          publicKey: idNum.toString()
        }
        uiSystem.setMessage(
          "Are you logged on to your Ethereum wallet? Something isn't working. If so, please reload",
          3
        )
        return resolve(id)
      }
    })
  })
}

getUser()

/////// PICK UP
declare var dcl: any
let stateLoot = { pickedUp: false }

export function sendNFT(props: Props, channel: IChannel) {
  let url = `${apiUrl}/rewards/${props.campaignId}/${props.collectPointId}`.toString()
  log(url)

  executeTask(async () => {
    try {
      await getUser()
      await dcl.loadModule('AirdropController')
      if (stateLoot.pickedUp) {
        return
      }
      stateLoot.pickedUp = true

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: id.publicKey
        }
      })
      const body = (await response.json()) as {
        id: string // uuid
        status: RewardStatus
        transaction: string | null // string when status === 'ready' | 'failed'
        targetContract: string | null // string when status === 'ready' | 'failed'
        message: string | null // string when status !=== 'transaction_ready'
        rewards: [] | null //  [{ token: 'MANA', amount: 100 }, etc]
      }
      log('got response from API ')
      log(body)

      switch (body.status) {
        case 'transaction_ready':
          dcl.callRpc('AirdropController', 'openCrate', [
            {
              title: 'You found a Treasure!',
              subtitle: "Click on it to see what's inside...",
              items: body.rewards.map((reward: any) => {
                return {
                  name: reward.title,
                  thumbnailURL: reward.image,
                  rarity: reward.rarity || 'swanky',
                  type: reward.type === 'erc20' ? 'erc20' : 'collectible'
                }
              })
            },
            body.transaction,
            body.targetContract
          ])
          break
        case 'transaction_pending':
          uiSystem.setMessage(body.message, 6)
          return log('Your rewards are on their way!')
          break
        case 'transaction_failed':
          uiSystem.setMessage(body.message, 6)
          log("Your rewards couldn't be sent. try again")
          dcl.callRpc('AirdropController', 'openCrate', [
            {
              title: 'You found a Treasure!',
              subtitle:
                "It looks like the transaction didn't go through. Maybe try again?",
              fastForward: true,
              items: body.rewards.map((reward: any) => {
                return {
                  name: reward.title,
                  thumbnailURL: reward.image,
                  rarity: reward.rarity || 'swanky',
                  type: reward.type === 'erc20' ? 'erc20' : 'collectible'
                }
              })
            },
            body.transaction,
            body.targetContract
          ])
          break
        case 'campaign_not_started':
          uiSystem.setMessage(body.message, 6)
          return log('Is too early to get your rewards')
          break

        case 'campaign_disabled':
          uiSystem.setMessage(body.message, 6)
          return log(
            "Campaign has begun but is disabled for now. We'll come back soon"
          )
          break

        case 'campaign_finished':
          uiSystem.setMessage(body.message, 6)
          return log('Is too late to get your rewards')
          break

        case 'unauthorized_address':
          uiSystem.setMessage(body.message, 6)
          return log('Are you a robot? If not, try again later')
          break

        case 'without_stock':
          uiSystem.setMessage(body.message, 6)
          return log('Sorry! We ran out of rewards')
          break

        case 'transaction_dropped':
          uiSystem.setMessage(body.message, 6)
          return log('Your rewards are on their way')
          break

        case 'transaction_success':
          uiSystem.setMessage(body.message, 6)
          return log('Your rewards have already been sent')
          break

        case 'error':
          uiSystem.setMessage(body.message, 6)
          return log(`Sorry! We couldn't prepare your reward: ${body.message}`)
          break

        default:
          log(body.status, body.message, body.rewards)
          uiSystem.setMessage(
            'Sorry! There was a problem with our servers, please try again later',
            3
          )
          return log('Sorry! There was a problem with our servers')
          break
      }

      channel.sendActions(props.onTreasure)
    } catch (e) {
      log(e.stack)
      uiSystem.setMessage(
        'Sorry! There was a problem with our servers, please try again later',
        3
      )
      log('failed to reach URL', e.message)
    }
  })
}
