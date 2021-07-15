// NAVIGATION

let burgerButton = document.getElementById('menu__icon');
let openClose = document.getElementById('openClose');
let menu__logo = document.getElementById('menu__logo');
let menu__body = document.getElementById('menu__body');

burgerButton.onclick = function(){

if(burgerButton.dataset.trigger == 'false'){

        openClose.innerHTML = 'ЗАКРЫТЬ';
        menu__body.style.left = '0%';
        openClose.style.color = 'black';
        menu__logo.style.border = '1px solid black';
        burgerButton.style.color = 'black';
        burgerButton.dataset.trigger = true;

    }else{

        openClose.innerText = openClose.dataset.text;
        menu__body.style.left = '100%';
        openClose.style.color = 'white';
        menu__logo.style.border = '1px solid white';
        burgerButton.style.color = 'white';
        burgerButton.dataset.trigger = false;

        }

};


// ITEM LIST 1

let item__title__btn_1 = document.getElementById('item__title__btn_1');
let tour__list_1 = document.getElementById('tour__list_1');
let item__icon_1 = document.getElementById('item__icon_1');
item__title__btn_1.onclick = function() {


if(item__title__btn_1.dataset.trigger == 'false'){
        tour__list_1.style.display = "grid";
        item__title__btn_1.dataset.trigger = true;
    } else {
         item__title__btn_1.dataset.trigger = false;
        	tour__list_1.style.display = "none";
    }
};

// ITEM LIST 2

// let item__title__btn_2 = document.getElementsById('item__title__btn_2');
// let tour__list_2 = document.getElementById('tour__list_2');
// let item__icon_2 = document.getElementById('item__icon_2');
// item__title__btn_2.onclick = function() {


// if(item__title__btn_2.dataset.trigger == 'true'){
//         tour__list_2.style.display = "grid !important";
//         // tour__list_2.classList.remove("tour__list");
//         // tour__list_2.classList.remove("tour__list_2");
//         // tour__list_2.classList.add("visible");
//         item__title__btn_2.dataset.trigger = false;
//     } else {
//          item__title__btn_2.dataset.trigger = true;
//          tour__list_2.style.display = "none";
//     }
// };

let item__title__btn_2 = document.getElementById('item__title__btn_2');
let tour__list_2 = document.getElementById('tour__list_2');
let item__icon_2 = document.getElementById('item__icon_2');
item__title__btn_2.onclick = function() {


if(item__title__btn_2.dataset.trigger == 'false'){
        tour__list_2.style.display = "grid";
        item__title__btn_2.dataset.trigger = true;
    } else {
         item__title__btn_2.dataset.trigger = false;
        	tour__list_2.style.display = "none";
    }
};