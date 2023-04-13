const burgerBtn = document.querySelector('.header__burger');
const menuMonile= document.querySelector('.header__mobile');
const headerMenuItems = [...document.querySelectorAll('.header .menu__item')]


const closeMenuMobile = () =>{
    burgerBtn.classList.remove('close')
    menuMonile.classList.remove('open')
    document.body.classList.remove('menuMobileOpen')
}

// open/close menu on mobile device 
burgerBtn.addEventListener('click',function(e){
    this.classList.toggle('close')
    menuMonile.classList.toggle('open')
    document.body.classList.toggle('menuMobileOpen')
})

// close menu after before navigate to the next page section
headerMenuItems.forEach(menuMonileItem => menuMonileItem.addEventListener('click',closeMenuMobile) )

// close menu afetr resizing screen
window.addEventListener('resize',function(e){
    if(window.screen.width> 1200){
        closeMenuMobile()
    }
})




