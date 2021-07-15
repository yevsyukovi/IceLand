
let item__title__btn_1 = document.getElementById('item__title__btn_1');
let tour__list_1 = document.getElementById('tour__list_1');
let item__icon_1 = document.getElementById('item__icon_1');
item__title__btn_1.onclick = function() {


if(item__title__btn_1.dataset.trigger == 'false'){
        tour__list_1.style.display = "grid";
        tour__list_1.style.visibility = "visible";
        tour__list_1.style.height = "auto";
        item__title__btn_1.dataset.trigger = true;
    } else {
         item__title__btn_1.dataset.trigger = false;
        	tour__list_1.style.display = "block";
        	tour__list_1.style.visibility = "hidden";
        	        tour__list_1.style.height = "0px";
    }
};

let item__title__btn_2 = document.getElementById('item__title__btn_2');
let tour__list_2 = document.getElementById('tour__list_2');
let item__icon_2 = document.getElementById('item__icon_2');
item__title__btn_2.onclick = function() {


if(item__title__btn_2.dataset.trigger == 'false'){
        tour__list_2.style.display = "grid";
        tour__list_2.style.visibility = "visible";
        tour__list_2.style.height = "auto";
        item__title__btn_2.dataset.trigger = true;
    } else {
         item__title__btn_2.dataset.trigger = false;
        	tour__list_2.style.display = "block";
        	tour__list_2.style.visibility = "hidden";
        	        tour__list_2.style.height = "0px";
    }
};
