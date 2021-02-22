//NOT USED YET
module managers {
    export class Health extends createjs.Container {
        // Variables
        public healthLabel: objects.Label;
        private player:objects.Player;
        private health: number;

        get Health():number {
            return this.player.playerHealth;
        }

        set Health(newHealth:number) {
            this.health = newHealth;
            this.healthLabel.text = "Health:" + this.health;
        }


        //Constructor
        constructor() {
            super();
            this.Init();
        }
        //Methods
        private Init():void {
            //create our labels
            this.health = 3;
            this.healthLabel = new objects.Label("Health: " + this.health, "20px", "Consolas", "#FFFF00", 540, 870, false);
            

            this.Main();
        }

        private Main():void {
            this.addChild(this.healthLabel);
        }
    }
}