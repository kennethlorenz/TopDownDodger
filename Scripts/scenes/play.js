var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            this.health = new objects.Label("Health: " + this.player.playerHealth.toString(), "20px", "Consolas", "#FFFF00", 320, 15, true);
            this.bossText = new objects.Label("Go to Nera ", "20px", "Consolas", "#FFFF00", 520, 15, true);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemies2 = new Array();
            this.enemies2 = new Array();
            this.enemies3 = new Array();
            this.nextLevel = new objects.Button("nextbutton", 605, 20);
            //this.enemyNum = 5;
            //set 5 x1 movespeed enemies for 
            for (var i = 0; i < 5; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            //set 1  x2 movespeed enemy for 
            for (var i = 0; i < 1; i++) {
                this.enemies2[i] = new objects.Enemy2();
            }
            //set 1 x3 movespeed enemy for 
            for (var i = 0; i < 1; i++) {
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
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // this.background.Update();
            this.player.Update();
            this.updateHealth();
            // this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                managers.Collision.Check(_this.player, e);
            });
            this.enemies2.forEach(function (e2) {
                e2.Update();
                managers.Collision.Check(_this.player, e2);
            });
            this.enemies3.forEach(function (e3) {
                e3.Update();
                managers.Collision.Check(_this.player, e3);
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.health);
            this.addChild(this.player);
            this.nextLevel.on("click", this.nextButtonClick);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.enemies2.forEach(function (e2) {
                _this.addChild(e2);
            });
            this.enemies3.forEach(function (e3) {
                _this.addChild(e3);
            });
            this.addChild(this.nextLevel);
            this.addChild(this.bossText);
            this.addChild(this.scoreBoard);
            //this.addChild(this.health);
        };
        PlayScene.prototype.updateHealth = function () {
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
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
        };
        PlayScene.prototype.nextButtonClick = function () {
            // Change from START to GAME scene
            managers.Game.currentScene = config.Scene.BOSS;
        };
        PlayScene.prototype.checkWaveCount = function () {
            for (var i = 0; i < 3; i++) {
            }
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map