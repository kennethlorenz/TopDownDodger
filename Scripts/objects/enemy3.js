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
    var Enemy3 = /** @class */ (function (_super) {
        __extends(Enemy3, _super);
        // Constructor
        function Enemy3() {
            var _this = _super.call(this, "enemy3") || this;
            // Variables
            _this.waveCount = 0;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy3.prototype.Start = function () {
            this.Reset();
        };
        Enemy3.prototype.Update = function () {
            this.Move();
            if (this.waveCount == 10) {
                this.Stop();
            }
            this.CheckBound();
        };
        Enemy3.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * 540) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        };
        Enemy3.prototype.Move = function () {
            this.y += 15;
        };
        Enemy3.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH + 25) {
                this.waveCount++;
                console.log(this.waveCount);
                this.Reset();
            }
            else if (this.waveCount == 9) {
                console.log("stop");
                managers.Game.currentScene = config.Scene.BOSS;
            }
        };
        Enemy3.prototype.Stop = function () {
            this.y = -50;
        };
        return Enemy3;
    }(objects.GameObject));
    objects.Enemy3 = Enemy3;
})(objects || (objects = {}));
//# sourceMappingURL=enemy3.js.map