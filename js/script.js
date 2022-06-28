import { Point } from "./Point.js";
import { Pendulum } from "./Pendulum.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const p = new Pendulum(new Point(100, 100), new Point(100, 200), 20, 3.14);
p.draw(ctx);

const animate = () => {
    p.draw(ctx);
    requestAnimationFrame(animate);
};

console.log(p);
animate();

export { ctx };
