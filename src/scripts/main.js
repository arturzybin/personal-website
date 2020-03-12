import '../styles/style.scss';

import {
   setupHomeLettersAnimation,
   animateHomeLettersAppear
} from './modules/home';

import {animateCursorTrail} from './modules/cursorTrail';

animateCursorTrail();
animateHomeLettersAppear();
setupHomeLettersAnimation();