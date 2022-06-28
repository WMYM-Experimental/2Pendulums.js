const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

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

const p = new Pendulum(new Point(100, 100), new Point(100, 200), 20, 0);
p.draw(ctx);

const animate = () => {
    p.draw(ctx);
    requestAnimationFrame(animate);
};

console.log(p);
animate();
