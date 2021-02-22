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
    var BossScene = /** @class */ (function (_super) {
        __extends(BossScene, _super);
        // Constructor
        function BossScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.Start();
            return _this;
        }
        BossScene.prototype.Start = function () {
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
        };
        BossScene.prototype.Update = function () {
            // this.background.Update();
            this.player.Update();
            this.updateHealth();
            this.checkWin();
            this.boss.Update();
            managers.Collision.Check(this.player, this.boss);
        };
        BossScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.health);
            this.addChild(this.player);
            this.addChild(this.boss);
            this.addChild(this.scoreBoard);
        };
        BossScene.prototype.updateHealth = function () {
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
        };
        BossScene.prototype.checkWin = function () {
            if (this.boss.y > 1100) {
                this.backgroundMusic.volume = 0;
                managers.Game.currentScene = config.Scene.WIN;
            }
        };
        BossScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
        };
        return BossScene;
    }(objects.Scene));
    scenes.BossScene = BossScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=boss.js.map