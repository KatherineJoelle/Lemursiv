import utils from "../node_modules/decentraland-ecs-utils/index"
import {apiUrl,headers,leaderboardCount,pollingInterval,updatingLeaderboardText} from './params'


export class LemursivLeaderboardSystem extends Entity{

    signChannels:IChannel[] = [null]
    signStrings:string[] = [null]
    leaderBoardText:string = ""

    constructor(strings:string[], allsigns:IChannel[]){
      super()
        this.signStrings = strings
        this.signChannels = allsigns 
        engine.addEntity(this)
        this.addComponentOrReplace(new utils.Interval(pollingInterval,this.pollServer))
    }
    
    pollServer(){

        var data = ["SeanTrees","KJWalker", "Lastraum"]

        for(var i = 0; i < this.signChannels.length; i++)
             {
                this.signChannels[i].sendActions([{"entityName":""+this.signStrings[i],"actionId":"changeText","values":{"newText":updatingLeaderboardText}}])
             }

          /*
          this.leaderBoardText = "TOP DONORS \n"
          let url = `${apiUrl}/top`
            executeTask(async () => {
              try {
                let response = await fetch(url,{
                  method: "GET",  
                  headers: headers,
                  body: JSON.stringify(data)
                })
                for(var i = 0; i < leaderboardCount; i++)
                {
                  this.leaderBoardText += "\n" + i + 1 + "."+response[i]
                }

                for(var i = 0; i < this.signChannels.length; i++)
                {
                   this.signChannels[i].sendActions([{"entityName":""+this.signStrings[i],"actionId":"changeText","values":{"newText":this.leaderBoardText}}])
                }

              } catch {
                log("failed to reach url")
              }
             })
             */

             ///// this is test data
             for(var i = 0; i < data.length; i++)
                {
                  this.leaderBoardText += "\n" + i + 1 + "."+data[i]
                }

             for(var i = 0; i < this.signChannels.length; i++)
             {
                this.signChannels[i].sendActions([{"entityName":""+this.signStrings[i],"actionId":"changeText","values":{"newText":this.leaderBoardText}}])
             }
             ////////////////
    }

}