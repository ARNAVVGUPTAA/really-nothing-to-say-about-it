class Form {
    constructor(){
        this.input = createInput("NAME");
        this.input.position(200,200);

        this.button = createButton("ENTER");
        this.button.position(200,220);
    }

    display(){
    this.button.mousePressed(()=> {
    
    this.input.hide();
    this.button.hide();
    
    playerCount++ ;

    //player.name = this.input.value();    
    });
    }
}