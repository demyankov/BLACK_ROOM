"use strict"
let html = document.querySelector('html')
let button = document.querySelector('#button-burger')
let wrapper = document.querySelector('#wrapper')
let banner = document.querySelector('#banner')
let navigationWrapper = document.querySelector('.navigation')

button.addEventListener('click',()=>{
  wrapper.className.includes('menu-active') ? html.style.overflow = 'auto':html.style.overflow = 'hidden'
     try {        
       banner.classList.toggle('menu-active')}
   catch{}
   wrapper.classList.toggle('menu-active')
 })

navigationWrapper.addEventListener('click',(e)=>{ 
   html.style.overflow = 'auto'  
   if (e.target.tagName === 'A'){
    wrapper.classList.remove('menu-active')
   try {banner.classList.remove('menu-active')}
   catch{}
      
}
})

