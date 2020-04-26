export { animateCursorTrail };

let isAnimationStop = false;
document.addEventListener('touchstart', () => isAnimationStop = true, {
  once: true
})

document.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});


function animateCursorTrail() {
  if (isAnimationStop) {
    deleteAllDots();
    return;
  }
  draw();
  requestAnimationFrame(animateCursorTrail);
}


function draw() {
  let x = mouse.x;
  let y = mouse.y;

  const dotWidth = dots[0].node.clientWidth + 1;
  const clientWidth = document.documentElement.clientWidth;
  const dotHeight = dots[0].node.clientHeight + 1;
  const clientHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  dots.forEach(function (dot, index, dots) {
    const nextDot = dots[index + 1] || dots[0];

    const randomX = Math.floor(Math.random() * 2) * (Math.round(Math.random()) * 2 - 1);
    const randomY = Math.floor(Math.random() * 2) * (Math.round(Math.random()) * 2 - 1);
    // to avoid scrollbar appearance because of overflow
    dot.x = (x + randomX > clientWidth - dotWidth) ?
      clientWidth - dotWidth :
      x + randomX;
    dot.y = (y + randomY > clientHeight - dotHeight) ?
      clientHeight - dotHeight :
      y + randomY;
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


function deleteAllDots() {
  const dots = document.querySelectorAll('.cursor-trail');
  dots.forEach((dot) => {
    dot.remove();
  })
}