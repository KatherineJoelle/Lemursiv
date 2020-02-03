

export class LemursivLeaderboardSystem implements ISystem{

    signChannels:IChannel[] = [null]
    signStrings:string[] = [null]

    constructor(strings:string[], allsigns:IChannel[]){
        this.signStrings = strings
        this.signChannels = allsigns 
    }
    
    update(){

        var data = {
            1: "test",
            2: "test2"
          }

          /*
          let url = `${BJGlobals.apiUrl}/${data.action}`
            executeTask(async () => {
              try {
                let response = await fetch(url,{
                  method: "POST",  
                  headers: BJGlobals.headers,
                  body: JSON.stringify(data)
                })
                let gameData = await response.json()      
                this.events.fireEvent(new GetServerDataEvent(gameData))
              } catch {
                BJGlobals.TEST_MODE ? log("failed to reach url") : ""
              }
             })
             */

             for(var i = 0; i < this.signChannels.length; i++)
             {
                this.signChannels[i].sendActions([{"entityName":""+this.signStrings[i],"actionId":"changeText","values":{"newText":"We did it!\nYes!"}}])
             }
    }
}