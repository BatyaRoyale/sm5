let x = prompt('Введите число');

let boxcontent = '<div class="box-content"></div>';
let box = document.querySelector('.box');


for(let a = 0; a < x; a++){
    box.insertAdjacentHTML('beforeend',boxcontent);
}