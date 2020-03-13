import '../styles/style.scss';

import {
   setupHomeLettersAnimation,
   animateHomeLettersAppear
} from './modules/home';

import  {
   startSkillsGradientAnimation
} from './modules/about';

import {
   startProjectCubesAnimation
} from './modules/projects';

import {animateCursorTrail} from './modules/cursorTrail';

animateCursorTrail();
animateHomeLettersAppear();
setupHomeLettersAnimation();
startSkillsGradientAnimation();
startProjectCubesAnimation();