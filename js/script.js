import { Point } from "./Point.js";
import { Pendulum } from "./Pendulum.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1;
let acelerationA = -0.01;
let acelerationB = 0.02;

const pA = new Pendulum(
    new Point(canvas.width / 2, 20 + 100),
    10,
    Math.PI / 2,
    200
);
const pB = new Pendulum(
    new Point(pA.massPoint.x, pA.massPoint.y),
    10,
    Math.PI / 3,
    200
);

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let numeratorA =
        -gravity * (2 * pA.radius + pB.radius) * Math.sin(pA.angle) -
        pB.radius * gravity * Math.sin(pA.angle - 2 * pB.angle) -
        2 *
            Math.sin(pA.angle - pB.angle) *
            pB.radius *
            (Math.pow(acelerationB, 2) * pB.length +
                Math.pow(acelerationA, 2) *
                    pA.length *
                    Math.cos(pA.angle - pB.angle));
    let denominatorA =
        pA.length *
        (2 * pA.radius +
            pB.radius -
            pB.radius * Math.cos(2 * pA.angle - 2 * pB.angle));

    let numeratorB =
        2 *
            Math.sin(pA.angle - pB.angle) *
            Math.pow(acelerationA, 2) *
            pA.length *
            (pA.radius + pB.radius) +
        gravity * (pA.radius + pB.radius) * Math.cos(pA.angle) +
        Math.pow(acelerationB, 2) *
            pB.length *
            pB.radius *
            Math.cos(pA.angle - pB.angle);

    let denominatorB =
        pB.length *
        (2 * pA.radius +
            pB.radius -
            pB.radius * Math.cos(2 * pA.angle - 2 * pB.angle));

    pA.angle += numeratorA / denominatorA;
    pB.angle += numeratorB / denominatorB;

    pA.update();
    pB.cordPoint.x = pA.massPoint.x;
    pB.cordPoint.y = pA.massPoint.y;
    pB.update();

    requestAnimationFrame(animate);
};

animate();
export { ctx };
