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
    var EnemyBoss = /** @class */ (function (_super) {
        __extends(EnemyBoss, _super);
        // Variables
        // Constructor
        function EnemyBoss() {
            var _this = _super.call(this, "enemyboss") || this;
            _this.Start();
            return _this;
        }
        // Methods
        EnemyBoss.prototype.Start = function () {
            this.x = 320;
            this.y = -300;
        };
        EnemyBoss.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        EnemyBoss.prototype.Reset = function () {
        };
        EnemyBoss.prototype.Move = function () {
            this.y += 2;
            if (this.y > 100) {
                this.y += 20;
            }
        };
        EnemyBoss.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        };
        return EnemyBoss;
    }(objects.GameObject));
    objects.EnemyBoss = EnemyBoss;
})(objects || (objects = {}));
//# sourceMappingURL=enemyboss.js.map