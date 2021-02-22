module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        private health: objects.Label;
        private bossText: objects.Label;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemies2:objects.Enemy2[];
        private enemies3:objects.Enemy3[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;
        private isExploding: boolean = false;
        private explosion: objects.Explosion;
        private nextLevel: objects.Button;
        //private health:managers.Health;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            this.health = new objects.Label("Health: " + this.player.playerHealth.toString(), "20px", "Consolas", "#FFFF00", 320, 15, true);
            this.bossText = new objects.Label("Go to Nera ", "20px", "Consolas", "#FFFF00", 520, 15, true);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemies2 = new Array<objects.Enemy2>();
            this.enemies2 = new Array<objects.Enemy2>();
            this.enemies3 = new Array<objects.Enemy3>();
            this.nextLevel = new objects.Button("nextbutton", 605, 20);
            //this.enemyNum = 5;
            //set 5 x1 movespeed enemies for 
            for(let i = 0; i < 5; i++) {
                this.enemies[i] = new objects.Enemy();
            }

            //set 1  x2 movespeed enemy for 
            for(let i = 0; i < 1; i++) {
                this.enemies2[i] = new objects.Enemy2();
            }

             //set 1 x3 movespeed enemy for 
             for(let i = 0; i < 1; i++) {
                this.enemies3[i] = new objects.Enemy3();
            }

            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.scoreBoard.Level = "Alker";
            //this.health = new managers.Health();


            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
            this.updateHealth();
            // this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            })
            this.enemies2.forEach(e2 => {
                e2.Update();
                 managers.Collision.Check(this.player, e2);
            })
            this.enemies3.forEach(e3 => {
                e3.Update();
                managers.Collision.Check(this.player, e3);
            })
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.health);
            this.addChild(this.player);
            
            this.nextLevel.on("click", this.nextButtonClick);
            // this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.enemies2.forEach(e2 => {
                this.addChild(e2);
            });
            this.enemies3.forEach(e3 => {
                this.addChild(e3);
            });
            this.addChild(this.nextLevel);
            this.addChild(this.bossText);
            this.addChild(this.scoreBoard);
            //this.addChild(this.health);

        }

        private updateHealth() {
            //let time = 0;
            this.removeChild(this.health);
            this.health = new objects.Label("Health: " + this.player.playerHealth.toString(), "20px", "Consolas", "#FFFF00", 320, 15, true);

            this.addChild(this.health);
            if (this.player.playerHealth == 0) {
                this.backgroundMusic.volume = 0;
                this.explosion = new objects.Explosion(this.player.x, this.player.y);
                this.explosion.on("animationend", this.handleExplosion);
                this.addChild(this.explosion);
                this.isExploding = true;
                this.removeChild(this.player);
                managers.Game.currentScene = config.Scene.OVER;
            }
           
        }

        private handleExplosion()
        {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
        }

        private nextButtonClick():void {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.BOSS;
        }

        private checkWaveCount()
        {
            for(let i = 0 ; i < 3 ; i++)
            {
                
            }
        }
    }
}