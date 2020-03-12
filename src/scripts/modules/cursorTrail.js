export { animateCursorTrail };


document.addEventListener("mousemove", function (event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});


function animateCursorTrail() {
  draw();
  requestAnimationFrame(animateCursorTrail);
}


function draw() {
  let x = mouse.x;
  let y = mouse.y;

  dots.forEach(function (dot, index, dots) {
    const nextDot = dots[index + 1] || dots[0];

    const randomX = Math.floor(Math.random() * 2) * (Math.round(Math.random()) * 2 - 1);
    const randomY = Math.floor(Math.random() * 2) * (Math.round(Math.random()) * 2 - 1);
    dot.x = x + randomX;
    dot.y = y + randomY;
    dot.draw();
    x += (nextDot.x - dot.x) * .3;
    y += (nextDot.y - dot.y) * .3;
  });
}


const dots = [];
const mouse = {
  x: 0,
  y: 0
};


class Dot {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.node = document.createElement('div');
    const randomColorNumber = Math.floor(Math.random() * 3);
    this.node.className = `cursor-trail cursor-trail_color_${randomColorNumber}`;
    document.body.appendChild(this.node);
  }

  draw() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  }
}


for (let i = 0; i < 30; i++) {
  dots.push(new Dot());
}