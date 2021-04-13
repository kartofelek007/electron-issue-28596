const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const changeCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", changeCanvasSize);
changeCanvasSize();

canvas.addEventListener("mousemove", e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const x = e.clientX;
    const y = e.clientY;

    ctx.save();
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "red";
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(x, y, 10 / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
})

canvas.addEventListener("mousedown", e => {
})

canvas.addEventListener("mouseup", e => {
})