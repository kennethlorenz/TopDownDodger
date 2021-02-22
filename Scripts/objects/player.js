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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
        // Constructor
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 700;
            this.playerHealth = 3;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // I need a reference to the "STAGE" createjs object to get mouse position 
            //this.x = objects.Game.stage.mouseX; 
            // This will eventually be replaced with keyboard input 
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 7.5;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 7.5;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 7.5;
            }
            // Maybe xbox controller....maybe... 
        };
        Player.prototype.CheckBound = function () {
            // Right boundary 
            if (this.x >= 640 - this.halfW) {
                // I have collided with the right boundary 
                this.x = 640 - this.halfW;
            }
            // Left boundary 
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            //Height Boundary 
            if (this.y >= 900 - this.halfH) {
                //i have collided with the height boundary 
                this.y = 900 - this.halfH;
            }
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map