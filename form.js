class Form {
    constructor(){
        this.input = createInput("NAME");
        this.input.position(200,200);

        this.button = createButton("ENTER");
        this.button.position(200,220);
    }

    display(){
    this.button.mousePressed(()=> {
        //print("DONE");
    
    this.input.hide();
    this.button.hide();
    
    this.newMethod();
    indexa = playerCount
    player.name = this.input.value();    
    });
    }

    newMethod() {
        playerCount = playerCount + 1;
        player.index = playerCount;
    }
}