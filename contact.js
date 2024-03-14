
const menu = document.querySelector('.menu');
const button = document.querySelector('.button');
const menuIcon = document.querySelector(`.menu-icon`);
const closeIcon = document.querySelector(`.close-icon`);

function chrome() {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu');
    menu.style.display = 'block';
    menu.style.display = 'none';
  } else {
   menu.classList.add(`show-menu`);
   menuIcon.style.display = `none`;
   closeIcon.style.display = `block`
  } 
}button.addEventListener(`click`, chrome);
