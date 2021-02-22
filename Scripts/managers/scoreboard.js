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
var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function (_super) {
        __extends(Scoreboard, _super);
        //Constructor
        function Scoreboard() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
        }
        Object.defineProperty(Scoreboard.prototype, "Level", {
            get: function () {
                return this.level;
            },
            set: function (newLevel) {
                this.level = newLevel;
                this.levelLabel.text = "Level:" + this.level;
            },
            enumerable: false,
            configurable: true
        });
        //Methods
        Scoreboard.prototype.Init = function () {
            //create our labels
            this.levelLabel = new objects.Label("", "20px", "Consolas", "#FFFF00", 0, 0, false);
            this.Main();
        };
        Scoreboard.prototype.Main = function () {
            this.addChild(this.levelLabel);
        };
        return Scoreboard;
    }(createjs.Container));
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map