module managers {
    export class Game {
        // GLOBAL VARIABLES
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static keyboardManager: managers.Keyboard;
        public static textureAtlas: createjs.SpriteSheet;
    }
}