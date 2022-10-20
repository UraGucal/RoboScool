import { createPopper, right} from '@popperjs/core';

//для использования компонента необходимо выделить селектор класса
const el =  document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt')

//Передаем элементы в функцию
createPopper(el, tooltip , {
  placement: 'top-start'
});
