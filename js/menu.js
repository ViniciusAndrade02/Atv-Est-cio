const menu = document.querySelector('.menu')

window.addEventListener("scroll", () => {
  if(window.scrollY <= 150){
    menu.classList.remove('menu-scroll')
    menu.classList.add('menu')
  }else{
    menu.classList.remove('menu')
    menu.classList.add('menu-scroll')
  }
})