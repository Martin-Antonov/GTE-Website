export class AnimationVertex {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.radius = 4;

    this.x = this.radius + Math.random() * (canvasWidth - 2 * this.radius);
    this.y = this.radius + Math.random() * (canvasHeight - 2 * this.radius);
    let randomSignX = Math.random() > 0.5 ? 1 : -1;
    let randomSignY = Math.random() > 0.5 ? 1 : -1;

    this.vx = randomSignX * (Math.random() * 0.2 + 0.2);
    this.vy = randomSignY * (Math.random() * 0.2 + 0.2);

    this.color = "#2e2e2e";
  }

  update(canvasWidth: number, canvasHeight: number) {
    if (this.x < this.radius || this.x > canvasWidth - this.radius) {
      this.vx = -this.vx;
    }
    if (this.y < this.radius || this.y > canvasHeight - this.radius) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
