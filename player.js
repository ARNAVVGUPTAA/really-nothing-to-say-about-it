class Player {
    constructor(){
      this.index = null;
      //this.distance = 0;
     //this.name = null;
      this.stroke = null;
      this.background = null;
      this.colour = null;
      this.drawing = drawing;
      this.otherDrawing = otherDrawing;
    }

    getCount(){
      var playerCountRef = database.ref('PlayerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }

    async updateCount(count){

      if(playerCount === 1){
        database.ref('/').update({
          PlayerCount: 1
        });
      }
      if(playerCount === 2){
        database.ref('/').update({
          PlayerCount: 2
        });
      }
      for(var i = 0; i < drawing.length; i++){
        database.ref("USERS/USER" + player.index).update({
          DRAWINGS: this.drawing
      })
    }
    }
  
    update(name){
      if(playerCount !== 0 && this.drawing !== undefined){
        //var playerIndex = "USER" + PlayerCount;
          database.ref("USERS/USER" + this.index).set({
            BG: this.background,
            DRAWINGS: this.drawing,
        });
        var otherDrawingRef = database.ref("USERS/USER" + tester + "/DRAWINGS");
        otherDrawingRef.once("value",(data)=>{
          if(data.val() !== null){
            this.otherDrawing = data.val();
            for(var i = 0; i < data.val().length; i++){
              this.drawing.push(data.val()[i]);
            }
          }
        });
      }
    }
      
    

  static playerInfo(){
    var playerInfoRef = database.ref("USERS");

    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });  
  }
  }