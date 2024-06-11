const menu = document.querySelector('.menu')

window.addEventListener("scroll", () => {
  if(window.scrollY === 0){
    menu.classList.remove('menu-scroll')
  }else{
    menu.classList.add('menu-scroll')
  }
})