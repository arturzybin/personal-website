export {startProjectCubesAnimation};

function startProjectCubesAnimation() {
   const cubes = document.querySelectorAll('.projects__cube');
   cubes.forEach((cube) => startCubeAnimation(cube, []));
}

function startCubeAnimation(cube, numbersList) {
   const positions = ['front', 'left', 'right', 'top', 'bottom', 'back'];
   if (!numbersList.length) {
      numbersList = getShuffledArray(positions.length);
   }
   const randomNumber = numbersList.pop();
   const position = positions[randomNumber];

   cube.className = `projects__cube projects__cube_${position}`;

   setTimeout(() => startCubeAnimation(cube, numbersList), 3000);
}

function getShuffledArray(len) {
   const a = [];
   for (let i = 0; i < len; i++) {
      a.push(i);
   }

   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}