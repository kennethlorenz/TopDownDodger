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
    var Enemy2 = /** @class */ (function (_super) {
        __extends(Enemy2, _super);
        // Constructor
        function Enemy2() {
            var _this = _super.call(this, "enemy2") || this;
            // Variables
            _this.waveCount = 0;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy2.prototype.Start = function () {
            this.Reset();
        };
        Enemy2.prototype.Update = function () {
            this.Move();
            if (this.waveCount == 6) {
                this.Stop();
            }
            this.CheckBound();
        };
        Enemy2.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * 540) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        };
        Enemy2.prototype.Move = function () {
            this.y += 10;
        };
        Enemy2.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH + 25) {
                this.waveCount++;
                console.log(this.waveCount);
                this.Reset();
            }
        };
        Enemy2.prototype.Stop = function () {
            this.y = -50;
        };
        return Enemy2;
    }(objects.GameObject));
    objects.Enemy2 = Enemy2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy2.js.map