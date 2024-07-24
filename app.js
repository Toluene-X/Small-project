const menu_btn = document.querySelector('.menu')

const curtain = document.querySelector('.curtain')

const nav_bar = document.querySelector('nav')

menu_btn.addEventListener('click', handle_nav)


function handle_nav(){
    menu_btn.classList.toggle('change_menu_icon')
    nav_bar.classList.toggle('show_nav')
    curtain.classList.toggle('show_nav')
}

curtain.addEventListener('click', handle_nav)