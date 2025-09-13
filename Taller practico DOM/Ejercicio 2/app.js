let btn = document.querySelector('.btn');
let body = document.querySelector('body');

function btnOnClick() {
    body.style.backgroundColor = "lightblue";
}

btn.addEventListener('click', btnOnClick);