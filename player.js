class Player {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
      this.stroke = null;
      this.background = null;
      this.colour = null;
    }

    getCount(){
      var playerCountRef = database.ref('PlayerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }

    updateCount(count){

      if(playerCount === 1){
        database.ref('/').set({
          PlayerCount: 1
        });
      }
      if(playerCount === 2){
        database.ref('/').set({
          PlayerCount: 2
        });
      }

    }
  
    update(name){
      if(playerCount !== 0){
        //var playerIndex = "USER" + PlayerCount;
        database.ref("USERS/USER" + this.index).set({
          name: this.name,
          BG: this.background,
          STROKE: this.stroke,
          COLOUR: this.colour,
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