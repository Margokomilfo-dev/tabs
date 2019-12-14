window.addEventListener('DOMContentLoaded', function(){

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      tabMenu = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');


  function hideTabConten(a){
    for (let i = a; i < tabContent.length; i++){
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabConten(1);

  function showTabContent(b){
    if (tabContent[b].classList.contains('hide')){
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
      
  tabMenu.addEventListener('click', function(event){
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')){
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabConten(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
});