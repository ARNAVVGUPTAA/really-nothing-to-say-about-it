class Player {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
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

    updateCount(count){

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
      database.ref("USERS/USER" + player.index).update({
        DRAWINGS: this.drawing
      })
    }
  
    async update(name){
      if(playerCount !== 0){
        //var playerIndex = "USER" + PlayerCount;
          await database.ref("USERS/USER" + this.index).set({
            name: this.name,
            BG: this.background,
            STROKE: this.stroke,
            COLOUR: this.colour,
            DRAWINGS: this.drawing,
        });
        var otherDrawingRef = database.ref("USERS/USER" + tester + "/DRAWINGS");
        otherDrawingRef.on("value",(data)=>{
          if(data.val() !== null){
            this.otherDrawing.push(data.val());
          }
        });
        
        for(var i=0; i < this.otherDrawing.length; i++){
         var path = this.otherDrawing[i];
          for(var j = 0; j < path.length; j++){
            drawing.push(path[i]);
          }
        }
      }
    }

  static playerInfo(){
    var playerInfoRef = database.ref("USERS");

    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });  
  }
  }