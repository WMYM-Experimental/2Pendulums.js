import { Point } from "./Point.js";
import { Pendulum } from "./Pendulum.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const p = new Pendulum(new Point(canvas.width / 2, 20 + 100), 20, 0, 100);
p.draw(ctx);

const animate = () => {
    p.draw(ctx);
    requestAnimationFrame(animate);
};

console.log(p);
animate();

export { ctx };
