class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('H2')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

display(){
    var title = createElement('h2')
    title.html("CAR RACING GAME :)");
    title.position(520,0);

    this.input.position(530, 220);
    this.button.position(650, 280);
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("HELLO " + player.name);
        this.greeting.position(530, 220);
    });
}
}