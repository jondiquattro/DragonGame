var StateTitle = {

    preload: function () {
        //logo is library key
        //loads image into game for use
        game.load.image("logo","images/title/Spaceship_2.png")

        //spritesheet for buttons
        game.load.spritesheet('buttons', 'images/ui/buttons.png', 265, 75);


    },

    create: function () {
        let x = game.world.centerX;//finds center of screen

        //game.add.sprite adds the image "logo" into the screen
        //notice how you can add a button image or other things
        
        this.logo = game.add.sprite(x,0,"logo")
        this.logo.anchor.set(.5, .0);

        //start button
        this.btnStart=game.add.button(x,game.world.height-150,'buttons',this.startGame,this,7,6,7)
        this.btnStart.anchor.set(0.5, 0.5);
    }
    ,
    startGame: function(){
        // console.log("start button was pressed")
    game.state.start("StateMain");

    },
     update: function () {
 
        

    }

}