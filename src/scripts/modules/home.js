export {
   setupHomeLettersAnimation,
   animateHomeLettersAppear
}

function setupHomeLettersAnimation() {
   const letters = document.querySelectorAll('.home__letter');
   letters.forEach(letter => letter.onmouseenter = () => animateLetter(letter));
}


function animateLetter(letter) {
   letter.classList.add('home__letter_animated');
   setTimeout(() => {
      letter.classList.remove('home__letter_animated');
   }, 900)
}


function animateHomeLettersAppear() {
   document.querySelector('.home__title').classList.remove('home__title_hidden')
   const letters = document.querySelectorAll('.home__letter');

   letters.forEach((letter, index) => {
      letter.style.visibility = 'hidden';
      setTimeout(() => {
         animateLetter(letter);
         letter.style.visibility = 'visible';
      }, index * 50)
   })
}