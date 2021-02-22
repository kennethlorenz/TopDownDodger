module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            
            this.background = new objects.Background();

            this.gameOverLabel = new objects.Label(
                "Game Over!", "40px", "Consolas", "#FFFFFF", 320, 240, true);

            this.backButton = new objects.Button("menubutton", 320, 340);

            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("game_over_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.4;

            
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            
            managers.Game.currentScene = config.Scene.START;
        }
    }
}