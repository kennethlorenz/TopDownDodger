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
    var WinScene = /** @class */ (function (_super) {
        __extends(WinScene, _super);
        // Constructor
        function WinScene() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // Method
        WinScene.prototype.Start = function () {
            // Initialize our variables
            this.background = new objects.BossBackground();
            this.winLabel = new objects.Label("Congratulations! You survived!", "20px", "Consolas", "#FFFF00", 320, 240, true);
            this.backButton = new objects.Button("menubutton", 320, 340);
            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("win_screen_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.4;
            this.Main();
        };
        WinScene.prototype.Update = function () { };
        WinScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.winLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        WinScene.prototype.backButtonClick = function () {
            managers.Game.currentScene = config.Scene.START;
        };
        return WinScene;
    }(objects.Scene));
    scenes.WinScene = WinScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map