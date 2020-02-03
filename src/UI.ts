import {MuteScene, UnmuteScene} from './game'


//create canvas for UI

export class LemursivUI extends UICanvas
{

    events:EventManager

    constructor(events:EventManager)
    {
        super()
        this.events = events

const rect = new UIContainerRect(this)
rect.positionX = 648
rect.vAlign = 'center'
rect.width = '60px'
rect.height = '360px'
rect.color =  new Color4(0.5725, 0.6392, 0.2666, 1)

this.visible = true

//add icons to this

let imageAtlas = "images/Lemursiv_icons.png"
let imageTexture = new Texture(imageAtlas)

//add tree icon
const treeButton = new UIImage(this, imageTexture)
treeButton.sourceLeft = 300
treeButton.sourceTop = 1
treeButton.sourceWidth = 100
treeButton.sourceHeight = 95
treeButton.width = 48
treeButton.height = 48
treeButton.positionX = 648
treeButton.positionY = 140
treeButton.name = 'trees'
treeButton.isPointerBlocker = true
treeButton.visible = true
treeButton.onClick = new OnClick(() => {
    log ('clicked on tree icon')
    treeButton.visible = false
    treeButton2.visible = true
    rectangle.visible = true
    treeText.visible = true
    edenFooter.visible = true
    
})

const treeButton2 = new UIImage(this, imageTexture)
treeButton2.sourceLeft = 200
treeButton2.sourceTop = 1
treeButton2.sourceWidth = 100  
treeButton2.sourceHeight = 95
treeButton2.width = 46
treeButton2.height = 46
treeButton2.positionX = 648
treeButton2.positionY = 140
treeButton2.visible = false
treeButton2.onClick = new OnClick(() => {
    log ('clicked on tree icon')
    treeButton2.visible = false
    treeButton.visible = true
    rectangle.visible = false
    treeText.visible = false
    edenFooter.visible = false
    pictureText.visible = false
    shareText.visible = false
    eventsText.visible = false
    infoText.visible = false
})

//add picture icon
const pictureButton = new UIImage(this, imageTexture)
pictureButton.sourceLeft = 1
pictureButton.sourceTop = 100
pictureButton.sourceWidth = 98
pictureButton.sourceHeight = 95
pictureButton.width = 43
pictureButton.height = 43
pictureButton.positionX = 648
pictureButton.positionY = 82
pictureButton.isPointerBlocker = true
pictureButton.visible = true
pictureButton.onClick = new OnClick(() => {
    log ('clicked on picture icon')
    pictureButton.visible = false
    pictureButton2.visible = true
    rectangle.visible = true
    pictureText.visible = true
    edenFooter.visible = true

})

const pictureButton2 = new UIImage(this, imageTexture)
pictureButton2.sourceLeft = 101
pictureButton2.sourceTop = 100
pictureButton2.sourceWidth = 98
pictureButton2.sourceHeight = 95
pictureButton2.width = 43
pictureButton2.height = 43
pictureButton2.positionX = 648
pictureButton2.positionY = 82
pictureButton2.visible = false
pictureButton2.isPointerBlocker = true
pictureButton2.onClick = new OnClick(() => {
    log ('clicked on picture icon')
    pictureButton2.visible = false
    pictureButton.visible = true
    rectangle.visible = false
    pictureText.visible = false
    edenFooter.visible = false
    treeText.visible = false
    eventsText.visible = false
    shareText.visible = false
    infoText.visible = false
})

//add events button
const eventsButton = new UIImage(this, imageTexture)
eventsButton.sourceLeft = 300
eventsButton.sourceTop = 100
eventsButton.sourceWidth = 98
eventsButton.sourceHeight = 100
eventsButton.width = 43
eventsButton.height = 43
eventsButton.positionX = 648
eventsButton.positionY = 24
eventsButton.visible = true
eventsButton.isPointerBlocker = true
eventsButton.onClick = new OnClick(() => {
    log ('clicked on events icon')
    eventsButton.visible = false
    eventsButton2.visible = true
    rectangle.visible = true
    eventsText.visible = true
    edenFooter.visible = true

})

const eventsButton2 = new UIImage(this, imageTexture)
eventsButton2.sourceLeft = 200
eventsButton2.sourceTop = 100
eventsButton2.sourceWidth = 98
eventsButton2.sourceHeight = 100
eventsButton2.width = 43
eventsButton2.height = 43
eventsButton2.positionX = 648
eventsButton2.positionY = 24
eventsButton2.visible = false 
eventsButton2.isPointerBlocker = true
eventsButton2.onClick = new OnClick(() => {
    log ('clicked on events icon')
    eventsButton2.visible = false
    eventsButton.visible = true
    rectangle.visible = false
    eventsText.visible = false
    edenFooter.visible = false
    treeText.visible = false
    pictureText.visible = false
    infoText.visible = false
    shareText.visible = false
})

//add info button
const infoButton = new UIImage(this, imageTexture)
infoButton.sourceLeft = 99
infoButton.sourceTop = 198.3
infoButton.sourceWidth = 100.5
infoButton.sourceHeight = 100.3
infoButton.width = 43
infoButton.height = 43
infoButton.positionX = 648
infoButton.positionY = '-34'
infoButton.visible = true
infoButton.isPointerBlocker = true
infoButton.onClick = new OnClick (() => {
    log ('clicked on info button')
    infoButton.visible = false
    infoButton2.visible = true
    rectangle.visible = true
    infoText.visible = true
    edenFooter.visible = true

})

const infoButton2 = new UIImage(this, imageTexture)
infoButton2.sourceLeft = 1
infoButton2.sourceTop = 200
infoButton2.sourceWidth = 98
infoButton2.sourceHeight = 101
infoButton2.width = 43
infoButton2.height = 43
infoButton2.positionX = 648
infoButton2.positionY = '-34'
infoButton2.visible = false
infoButton2.onClick = new OnClick (() => {
    log ('clicked on info button')
    infoButton2.visible = false
    infoButton.visible = true
    rectangle.visible = false
    infoText.visible = false
    edenFooter.visible = false
    treeText.visible = false
    pictureText.visible = false
    eventsText.visible = false
    shareText.visible = false
})




//add share icon
const shareIcon = new UIImage(this, imageTexture)
shareIcon.sourceLeft = 300
shareIcon.sourceTop = 199
shareIcon.sourceWidth = 100
shareIcon.sourceHeight = 97
shareIcon.width = 43
shareIcon.height = 43
shareIcon.positionX = 648
shareIcon.positionY = '-92'
shareIcon.visible = true
shareIcon.isPointerBlocker = true
shareIcon.onClick = new OnClick (() => {
    log ('clicked on share icon')
    shareIcon.visible = false
    shareIcon2.visible = true
    rectangle.visible = true
    shareText.visible = true
    edenFooter.visible = true
   
})

const shareIcon2 = new UIImage(this, imageTexture)
shareIcon2.sourceLeft = 200
shareIcon2.sourceTop = 199
shareIcon2.sourceWidth = 100
shareIcon2.sourceHeight = 97
shareIcon2.width = 43
shareIcon2.height = 43
shareIcon2.positionX = 648
shareIcon2.positionY = '-92'
shareIcon.isPointerBlocker = true
shareIcon2.visible = false
shareIcon2.onClick = new OnClick (() => {
    log ('clicked on share icon')
    shareIcon2.visible = false
    shareIcon.visible = true
    rectangle.visible = false
    shareText.visible = false
    edenFooter.visible = false 
    treeText.visible = false
    pictureText.visible = false
    infoText.visible = false
    eventsText.visible = false
})

//add sound icon

const soundIcon = new UIImage(this, imageTexture)
soundIcon.sourceLeft = 299
soundIcon.sourceTop = 298
soundIcon.sourceWidth = 100.5
soundIcon.sourceHeight = 100
soundIcon.width = 43
soundIcon.height = 43
soundIcon.positionX = 648
soundIcon.positionY = '-150'
soundIcon.visible = true
soundIcon.isPointerBlocker = true
soundIcon.onClick = new OnClick (() => {
    log ('clicked sound icon')

    soundIcon.visible = false
    muteIcon.visible = true
    treeText.visible = false
    shareText.visible = false
    pictureText.visible = false
    eventsText.visible = false
    infoText.visible = false
    edenFooter.visible = false
    rectangle.visible = false
    
    this.events.fireEvent(new MuteScene())
    
}) //line above is a stub; all audiosources will need to be deactivated manually once they've been added in 

const muteIcon = new UIImage(this, imageTexture)
muteIcon.sourceLeft = 199
muteIcon.sourceTop = 298
muteIcon.sourceWidth = 100
muteIcon.sourceHeight = 100
muteIcon.width = 43
muteIcon.height = 43
muteIcon.positionX = 648
muteIcon.positionY = '-150'
muteIcon.visible = false
muteIcon.isPointerBlocker = true
muteIcon.onClick = new OnClick (() => {
    log ('clicked mute icon')
    muteIcon.visible = false
    soundIcon.visible = true
    treeText.visible = false
    shareText.visible = false
    pictureText.visible = false
    eventsText.visible = false
    infoText.visible = false
    edenFooter.visible = false
    rectangle.visible = false
    this.events.fireEvent(new UnmuteScene())
})//line above is a stub; all audiosources will need to be deactivated manually once they've been added in 











//create new container inside this for pop ups
const rectangle = new UIContainerRect(this)
rectangle.adaptHeight = true
rectangle.adaptWidth = true
rectangle.positionX = 300
rectangle.positionY = 20
rectangle.color = new Color4(1, 1, 1, 1)
rectangle.width = 450
rectangle.height = 600
rectangle.visible = false
//reset to false

let textAtlas = "images/Lemursiv_popUps.png"
let textTexture = new Texture(textAtlas)


//insert pop ups 
//add tree pop up

const treeText = new UIImage(this, textTexture)
treeText.sourceLeft = 1
treeText.sourceTop = 1
treeText.sourceWidth = 455
treeText.sourceHeight = 270
treeText.positionX = 300
treeText.positionY = 170
treeText.width = 450
treeText.height = 300
treeText.visible = false 






//add footer that will be reused in each pop-up

const edenFooter = new UIImage(this, textTexture)
edenFooter.sourceLeft = 567
edenFooter.sourceTop = 800
edenFooter.sourceWidth = 455
edenFooter.sourceHeight = 240
edenFooter.positionX = 300
edenFooter.positionY = '-170'
edenFooter.width = 450
edenFooter.height = 260
edenFooter.visible = false



//add pictures pop-up

const pictureText = new UIImage(this, textTexture)
pictureText.sourceLeft = 567
pictureText.sourceTop = 1
pictureText.sourceWidth = 455
pictureText.sourceHeight = 270
pictureText.positionX = 300
pictureText.positionY = 170
pictureText.width = 450
pictureText.height = 300
pictureText.visible = false

//add events pop-up

const eventsText = new UIImage(this, textTexture)
eventsText.sourceLeft = 1
eventsText.sourceTop = 300
eventsText.sourceWidth = 455
eventsText.sourceHeight = 292
eventsText.positionX = 300
eventsText.positionY = 130
eventsText.width = 450
eventsText.height = 350
eventsText.visible = false


//add info pop-up

const infoText = new UIImage(this, textTexture)
infoText.sourceLeft = 567
infoText.sourceTop = 300
infoText.sourceWidth = 455
infoText.sourceHeight = 292
infoText.positionX = 300
infoText.positionY = 130
infoText.width = 450
infoText.height = 350
infoText.visible = false

//add share pop-up

const shareText = new UIImage (this, textTexture)
shareText.sourceLeft = 2
shareText.sourceTop = 600
shareText.sourceWidth = 455
shareText.sourceHeight = 375
shareText.positionX = 300
shareText.positionY = 110
shareText.width = 450
shareText.height = 400
shareText.visible = false 


    }
}

