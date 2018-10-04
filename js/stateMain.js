var StateMain = {

    preload: function () {
        game.load.spritesheet('ship','images/title/dragon.png', 120, 85, 4);//width, height, frames
        game.load.image("tiles","images/tiles.png");
        game.load.tilemap("map","images/map3.json",null,Phaser.Tilemap.TILED_JSON);
        

    },

    create: function () {
        // console.log("ready")

        game.physics.startSystem(Phaser.Physics.ARCADE);


        //create map
        this.map = game.add.tilemap("map");
        this.map.addTilesetImage("tiles");//associates tile.png with map
        this.layer = this.map.createLayer("Tile Layer 1");
        this.layer.resizeWorld();
        this.map.setCollisionBetween(0,24);


        this.rocket = game.add.sprite(150, 150, "ship");
        this.rocket.animations.add('fly', [0,1,2,3], 12, true);
        this.rocket.animations.play('fly');
        this.rocket.anchor.set(0.5, 0.5);
        game.physics.arcade.enable(this.rocket);
        this.rocket.body.gravity.y = 100;
        this.rocket.body.bounce.set(0.10);


        game.camera.follow(this.rocket);

        //movement
        cursors = game.input.keyboard.createCursorKeys();
    }
    , update: function () {
        //check for collison with floor
        game.physics.arcade.collide(this.rocket, this.layer);
        
        
        if (this.rocket.body.velocity.x>0){
            this.rocket.scale.x=1;
        }
        else {
            this.rocket.scale.x=-1;
        }




        //moves ship
        if(cursors.left.isDown){
            this.rocket.body.velocity.x=-250;
        }
        if(cursors.right.isDown){
            this.rocket.body.velocity.x=250;
        }
        if(cursors.up.isDown){
            this.rocket.body.velocity.y=-150;

        }
    }

}