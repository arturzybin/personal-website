import '../styles/style.scss';

import {
   setupHomeLettersAnimation,
   animateHomeLettersAppear
} from './modules/home';

import  {
   startSkillsGradientAnimation
} from './modules/skills';

import {animateCursorTrail} from './modules/cursorTrail';

animateCursorTrail();
animateHomeLettersAppear();
setupHomeLettersAnimation();
startSkillsGradientAnimation();