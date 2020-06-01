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
      database.ref('/').update({
        PlayerCount: playerCount
      });
    }
  
    update(name){
      if(playerCount !== 0){
        //var playerIndex = "USER" + PlayerCount;
        database.ref("USERS/USER" + playerCount).set({
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