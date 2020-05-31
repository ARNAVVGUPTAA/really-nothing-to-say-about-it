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
      var playerCountRef = database.ref('/');
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
        database.ref("USER" + playerCount).set({
          name: this.name,
          BG: this.background,
          STROKE: this.stroke,
          COLOUR: this.colour,
        });
      }
    }
  }