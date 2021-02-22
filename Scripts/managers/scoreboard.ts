module managers {
    export class Scoreboard extends createjs.Container {
        // Variables
        public levelLabel: objects.Label;

        private level: string;

        get Level():string {
            return this.level;
        }

        set Level(newLevel:string) {
            this.level = newLevel;
            this.levelLabel.text = "Level:" + this.level;
        }


        //Constructor
        constructor() {
            super();
            this.Init();
        }
        //Methods
        private Init():void {
            //create our labels
            this.levelLabel = new objects.Label("", "20px", "Consolas", "#FFFF00", 0, 0, false);
            this.Main();
        }

        private Main():void {
            this.addChild(this.levelLabel);
        }
    }
}