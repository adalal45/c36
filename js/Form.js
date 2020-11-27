class Form{
    constructor() {  
    }
    display() {
        var title = createElement("h2");
        title.html("Racing Game");
        title.position(530, 10);
        
        var input = createInput("Name");
        var button = createButton("play");
        var greeting = createElement("h3");
        input.position(530, 180);
        button.position(570, 220);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(530, 160);
        });
    }
}

