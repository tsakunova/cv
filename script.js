
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuList = document.querySelector('.burger-menu-list');
const comment = document.getElementById('comment');
const checkForm = document.getElementById('check-form');
const tel = document.getElementById('tel-form');
let telMess = document.getElementById('telMess');

function formChecked (){
  const valueTextArea = comment.value;
  const valueTel = tel.value;
  const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regTel = /^\+375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
  if(regTel.test(valueTel)){
    telMess.textContent = 'number is correct';
    telMess.style.color = 'green';
    telMess.style.textTransform = 'uppercase'
  }
  if(!regTel.test(valueTel)) {
    telMess.textContent = 'number is incorrect';
    telMess.style.color = 'red';
    telMess.style.textTransform = 'uppercase'
  }
 if(!regMail.test(valueTextArea)){
   comment.value = 'tv.tsakunova@gmail.com';
 }
}

checkForm.addEventListener('click', formChecked)



burgerButton.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});
burgerMenuList.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});
