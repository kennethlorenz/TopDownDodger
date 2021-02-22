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
var objects;
(function (objects) {
    var BossBackground = /** @class */ (function (_super) {
        __extends(BossBackground, _super);
        // Constructor
        function BossBackground() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("bossbackground")) || this;
            // Variables
            _this.speedY = 0.5;
            console.log("Creating the background");
            _this.Start();
            return _this;
        }
        // Functions
        BossBackground.prototype.Start = function () {
            this.Reset();
        };
        BossBackground.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        BossBackground.prototype.Reset = function () {
            // Reset my background y position.
            console.log("RESET!");
        };
        BossBackground.prototype.Move = function () {
            this.y += this.speedY;
        };
        // Collision Detection
        BossBackground.prototype.CheckBound = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return BossBackground;
    }(createjs.Bitmap));
    objects.BossBackground = BossBackground;
})(objects || (objects = {}));
//# sourceMappingURL=bossbackground.js.map