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
//NOT USED YET
var managers;
(function (managers) {
    var Health = /** @class */ (function (_super) {
        __extends(Health, _super);
        //Constructor
        function Health() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
        }
        Object.defineProperty(Health.prototype, "Health", {
            get: function () {
                return this.player.playerHealth;
            },
            set: function (newHealth) {
                this.health = newHealth;
                this.healthLabel.text = "Health:" + this.health;
            },
            enumerable: false,
            configurable: true
        });
        //Methods
        Health.prototype.Init = function () {
            //create our labels
            this.health = 3;
            this.healthLabel = new objects.Label("Health: " + this.health, "20px", "Consolas", "#FFFF00", 540, 870, false);
            this.Main();
        };
        Health.prototype.Main = function () {
            this.addChild(this.healthLabel);
        };
        return Health;
    }(createjs.Container));
    managers.Health = Health;
})(managers || (managers = {}));
//# sourceMappingURL=health.js.map