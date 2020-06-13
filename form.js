class Form {
    constructor(){/*
        this.input = createInput("NAME");
        this.input.position(200,200);
*/
        this.button = createButton("ENTER");
        this.button.position(200,220);
    }

    display(){

        //var we = 
        

        if(playerCount < 2){
            text(playerCount + " <= Did it change? If not, please refrsh the page and try again",3,400);
                
        }
        this.button.mousePressed(()=> {
           //drawing = [];
        //print("DONE");
    
            //this.input.hide();
            this.button.hide();

    
    
            this.newMethod();
            //indexa = playerCount
           // player.name = this.input.value();
    
            player.update();
        });
    }

    newMethod() {
        playerCount = playerCount + 1;
        player.index = playerCount;
    }
}