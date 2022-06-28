import { ctx } from "./script.js";
import { Point } from "./Point.js";

class Pendulum {
    constructor(cordPoint, radius, angle, length) {
        this.cordPoint = cordPoint;
        this.massPoint = {
            x: this.cordPoint.x + length * Math.cos(angle),
            y: this.cordPoint.y + length * Math.sin(angle),
        };
        this.radius = radius;
        this.angle = angle;
        this.length = length;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(this.cordPoint.x, this.cordPoint.y);
        ctx.lineTo(this.massPoint.x, this.massPoint.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(
            this.massPoint.x,
            this.massPoint.y,
            this.radius,
            0,
            2 * Math.PI
        );
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.massPoint.x =
            this.cordPoint.x + this.length * Math.cos(this.angle);
        this.massPoint.y =
            this.cordPoint.y + this.length * Math.sin(this.angle);
        this.draw(ctx);
    }
}

export { Pendulum };
