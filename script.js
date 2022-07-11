
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu-list');

burgerButton.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});
burgerMenuList.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});
