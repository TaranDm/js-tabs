window.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabheader__item'), //итемы табов
        tabsContent = document.querySelectorAll('.tabcontent'), //итемы таб контент
        tabsParent = document.querySelector('.tabheader__items');//родитель таобов

    function hideTabContent() {
        tabsContent.forEach(item => {
              //скрыли все эллементы таб контент
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        // .show{display: block}.hide{display:none}.fade{animation-name: fade; animation-duration: 1.5s;}@keyframes fade {from{opacity: 0.1;}to{opacity: 1;}}
              // item.style.display = 'none';
        });
        tabs.forEach(item =>{
            //у всех эл. таб удаляем класс active
            item.classList.remove('tabheader__item_active')
        })
    }
   function showTabContent(i = 0) {
        //показываем 1й эл (в i передаем номер элемента).
       tabsContent[i].classList.add('show', 'fade'); 
       // show{display: block} .fade{animation-name: fade; animation-duration: 1.5s;} @keyframes fade {from{opacity: 0.1;}to{opacity: 1;}}
       tabsContent[i].classList.remove('hide');
      // tabsContent[i].style.display='block';
       //добавляем к 1му эл. класс active
       tabs[i].classList.add('tabheader__item_active');
   }
    hideTabContent();
    showTabContent();

    //клик в родителя табов.
tabsParent.addEventListener('click', (evt) => {
    //эл по которому произошел клик
    const target = evt.target;
    //если клик в родителе произошел по табу
    if(target && target.classList.contains('tabheader__item')) {
        //1. определяем номер у таба в списке по которому произошел клик и по определенному номеру вызвать функцию  showTabContent(i);

        tabs.forEach((item, i) => {
            //если эл. в псевдомассиве tabs совпадает с тем эл. по котороуму кликнул пользователь выводим таб контент с номером таба по которому произошел клик (i).
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }

        });
    }

})

})
