var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create a temp Vec2 object for each object passed in.
            var P1 = new math.Vec2(obj1.x, obj1.y);
            var P2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(P1, P2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // React to our collision
                    // Check what I am colliding with. 
                    switch (obj2.name) {
                        case "enemy":
                            obj1.playerHealth--;
                            //console.log(obj1.playerHealth);
                            createjs.Sound.play("explosion");
                            break;
                        case "enemy2":
                            obj1.playerHealth--;
                            //console.log(obj1.playerHealth);
                            createjs.Sound.play("explosion");
                            break;
                        case "enemy3":
                            obj1.playerHealth--;
                            //console.log(obj1.playerHealth);
                            createjs.Sound.play("explosion");
                            break;
                        case "enemyboss":
                            obj1.playerHealth = obj1.playerHealth - 3;
                            createjs.Sound.play("explosion");
                            break;
                    }
                    obj2.isColliding = true;
                }
            }
            else {
                obj2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map