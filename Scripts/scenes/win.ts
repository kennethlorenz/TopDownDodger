module scenes {
    export class WinScene extends objects.Scene {
        // Variables
        private background: objects.BossBackground;
        private winLabel: objects.Label;
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
            
            this.background = new objects.BossBackground();

            this.winLabel = new objects.Label(
                "Congratulations! You survived!", "20px", "Consolas", "#FFFF00", 320, 240, true);

            this.backButton = new objects.Button("menubutton", 320, 340);

            // Instantiate Sound
            this.backgroundMusic = createjs.Sound.play("win_screen_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.4;

            
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.winLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            
            managers.Game.currentScene = config.Scene.START;
        }
    }
}