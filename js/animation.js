//SCROLL ANIMAR


function AnimationScroll(){
  let parametro 

  parametro = 0.7

  const sections = document.querySelectorAll('.js-scroll')
  const heightRelativa = window.innerHeight * parametro
  
  
  function animarscroll(){
    sections.forEach( (item) => {
      const Top = item.getBoundingClientRect().top - heightRelativa
      if(Top < 0){
        item.classList.add('ativo')
      }else if(item.classList.contains('ativo')){
        item.classList.remove('ativo') 
      }
    })
  }
  animarscroll()
  
  window.addEventListener('scroll',animarscroll)
  
  
  const sectionVertical = document.querySelectorAll('.js-scroll-vertical')
  
  function AnimarVertical(){
      sectionVertical.forEach((item) => {
        const TopVer = item.getBoundingClientRect().top - window.innerHeight * parametro
        if(TopVer < 0){
          item.classList.add('ativo')
        }else if(item.classList.contains('ativo')){
          item.classList.remove('ativo') 
        }
      })
  }
  AnimarVertical()
  window.addEventListener('scroll',AnimarVertical)
  }

AnimationScroll()

