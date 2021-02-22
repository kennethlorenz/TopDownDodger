module objects {
    export class EnemyBoss extends objects.GameObject {
        // Variables
        // Constructor
        constructor() {
            super("enemyboss");
            this.Start();
        }
        // Methods
        public Start():void {
            this.x = 320;
            this.y = -300;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
        }
        public Reset():void {
            
        }
        public Move():void {
            this.y += 2;
            if (this.y > 100) {
                this.y += 20;

            }
        }
        public CheckBound():void {
            if(this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}