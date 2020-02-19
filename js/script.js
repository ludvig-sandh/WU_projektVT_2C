const burger = document.querySelector('.burger')
console.log(burger)
const nav = document.querySelector('.navLinks')
const nl1 = document.querySelector('#navLink1')
const nl2 = document.querySelector('#navLink2')
const nl3 = document.querySelector('#navLink3')
const nl4 = document.querySelector('#navLink4')

function toggleMeny() {
    nav.classList.toggle('navActive');
    burger.classList.toggle('toggle');
    console.log("Toggled")
}

burger.addEventListener('click', toggleMeny);
nl1.addEventListener('click', toggleMeny);
nl2.addEventListener('click', toggleMeny);
nl3.addEventListener('click', toggleMeny);
nl4.addEventListener('click', toggleMeny);

window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize();
