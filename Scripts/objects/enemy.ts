module objects {
  export class Enemy extends objects.GameObject {
    // Variables
    private waveCount: number = 0;
    // Constructor
    constructor() {
      super("enemy");
      this.Start();
    }
    // Methods
    public Start(): void {
      this.Reset();
    }
    public Update(): void {
      this.Move();
      if (this.waveCount == 3) {
        this.Stop();
      }
      this.CheckBound();
    }
    public Reset(): void {
      this.x = Math.floor(Math.random() * 540) + 50;
      this.y = Math.floor(Math.random() * -800) - 50;
    }
    public Move(): void {
      this.y += 5;
    }
    public CheckBound(): void {
      if (this.y >= 900 + this.halfH + 25) {
        this.waveCount++;
        console.log(this.waveCount);
        this.Reset();
      } else if (this.waveCount == 4) {
        console.log("stop");
        //managers.Game.currentScene = config.Scene.BOSS;
      }
    }

    public Stop(): void {
      this.y = -50;
    }
  }
}
