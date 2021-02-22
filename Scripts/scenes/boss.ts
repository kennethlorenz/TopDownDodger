module scenes {
    export class BossScene extends objects.Scene {
        // Variables
        private background: objects.BossBackground;
        private player:objects.Player;
        private health: objects.Label;
        private boss:objects.EnemyBoss;
        private enemies:objects.Enemy[];
        private enemies2:objects.Enemy2[];
        private enemies3:objects.Enemy3[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;
        private isExploding: boolean = false;
        private explosion: objects.Explosion;
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
            this.background = new objects.BossBackground();
            this.player = new objects.Player();
            this.health = new objects.Label("Health: " + this.player.playerHealth.toString(), "20px", "Consolas", "#FFFF00", 320, 15, true);
            this.boss = new objects.EnemyBoss();

            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.scoreBoard.Level = "Nera";
            //this.health = new managers.Health();


            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("boss_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
            this.updateHealth();
            this.checkWin();
            this.boss.Update();
            managers.Collision.Check(this.player, this.boss);
            
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.health);
            this.addChild(this.player);
            this.addChild(this.boss);
            this.addChild(this.scoreBoard);

        }

        private updateHealth() {
            //let time = 0;
            this.removeChild(this.health);
            this.health = new objects.Label("Health: " + this.player.playerHealth.toString(), "20px", "Consolas", "#FFFF00", 320, 15, true);

            this.addChild(this.health);
            if (this.player.playerHealth <= 0) {
                this.backgroundMusic.volume = 0;
                this.explosion = new objects.Explosion(this.player.x, this.player.y);
                this.explosion.on("animationend", this.handleExplosion);
                this.addChild(this.explosion);
                this.isExploding = true;
                this.removeChild(this.player);
                managers.Game.currentScene = config.Scene.OVER;
            }
           
        }

        private checkWin() {
            if (this.boss.y > 1100) {
                
                this.backgroundMusic.volume = 0;
                managers.Game.currentScene = config.Scene.WIN;
            }
        }

        private handleExplosion()
        {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
        }



    }
}