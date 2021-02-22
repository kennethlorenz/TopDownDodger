var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["GAME"] = 1] = "GAME";
        Scene[Scene["BOSS"] = 2] = "BOSS";
        Scene[Scene["WIN"] = 3] = "WIN";
        Scene[Scene["OVER"] = 4] = "OVER";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map