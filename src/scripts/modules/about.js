export {startSkillsGradientAnimation};

function startSkillsGradientAnimation() {
   const container = document.querySelector('.text-gradient-container');
   if (!container) return;
   const chars = container.textContent.trim().split('');
   container.innerHTML = '<span>' + chars.join('</span><span>') + '</span>'

   const words = createWordsArray(container);
   animateSkills(words);
}


function createWordsArray(container) {
   const charsNodes = container.querySelectorAll('span');
   const words = [[]];
   let wordIndex = 0;

   for (let node of charsNodes) {
      if (node.textContent === '|' && words[wordIndex].length) {
         wordIndex++;
         words[wordIndex] = [];
      }
      if (node.textContent !== ' ' && node.textContent !== '|') {
         words[wordIndex].push(node);
      }
   }

   return words;
}


function animateSkills(words, previousWordIndex) {
   let randomNumber = Math.floor(Math.random() * 14);
   while (randomNumber === previousWordIndex) {
      randomNumber = Math.floor(Math.random() * 14);
   }
   const wordLetters = words[randomNumber];

   const skill = document.createElement('span');
   wordLetters.forEach(letter => skill.textContent += letter.textContent);
   skill.classList.add('skill');
   wordLetters[0].before(skill);
   wordLetters.forEach(letter => letter.hidden = true)

   setTimeout(() => {
      skill.classList.add('skill_active');
   }, 300)

   setTimeout(() => {
      skill.classList.remove('skill_active');
   }, 2400)

   setTimeout(() => {
      skill.remove();
      wordLetters.forEach(letter => letter.removeAttribute('hidden'));
      setTimeout(() => animateSkills(words, randomNumber), 300)
   }, 3000)
}