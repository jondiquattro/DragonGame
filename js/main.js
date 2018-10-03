
//the title of this file is main.js but that is a poor name because it is 
//in rfrence to this being the main js file that glues everything together
//not to be confused with stateMain.js which is the main gaming screen


var game;
var score;
var soundOn = true;

window.onload = function () {
    if (screen.width > 1500) {
        //desktop laptop
        game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");

    } else {
        //mobile device
        game = new 
        Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
    }
    //add a state or screen to the game
    game.state.add("StateMain", StateMain);
    game.state.add("StateTitle", StateTitle);

    //chooses which screen to start with
    game.state.start("StateTitle");

}