import { Point } from "./Point.js";
import { Pendulum } from "./Pendulum.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pA = new Pendulum(
    new Point(canvas.width / 2, 20 + 100),
    10,
    Math.PI / 2,
    200
);
const pB = new Pendulum(new Point(pA.massPoint.x, pA.massPoint.y), 10, 0, 200);

const animate = () => {
    pA.draw(ctx);
    pB.draw(ctx);
    requestAnimationFrame(animate);
};

animate();

export { ctx };
