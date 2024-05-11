import makeDropDown from './dropDownMenu.js';
import makeimageCarousel from './imageCarousel.js';
import './style.css';

makeDropDown(
  'mouseover',
  document.querySelector('.dropdownMenu'),
  document.querySelector('#dropdownWrapper')
);

makeDropDown(
  'click',
  document.querySelector('.dropdownMenu2'),
  document.querySelector('#dropdownWrapper2')
);

makeimageCarousel(
  document.querySelector('#prevImgBtn'),
  document.querySelector('#nextImgBtn'),
  document.querySelector('#pictureFrame'),
  5000
);
