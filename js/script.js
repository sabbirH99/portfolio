let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-moon');
    themeToggler.classList.toggle('fa-sun');

    if(themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}


window.onscroll = () =>{
    header.classList.remove('active');
    menu.classList.add('fa-bars');
    menu.classList.remove('fa-times');
}
