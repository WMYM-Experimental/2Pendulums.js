import { ctx } from "./script.js";
import { Point } from "./Point.js";

class Pendulum {
    constructor(cordPoint, massPoint, radius, angle) {
        this.cordPoint = cordPoint;
        this.massPoint = massPoint;
        this.radius = radius;
        this.angle = angle;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.cordPoint.x, this.cordPoint.y);
        ctx.lineTo(this.massPoint.x, this.massPoint.y);
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
}

export { Pendulum };
