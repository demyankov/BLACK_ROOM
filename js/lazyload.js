const images = document.querySelectorAll('.lazy');

window.addEventListener('load',()=>{   
if (!"loading" in HTMLImageElement.prototype) {
            images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src')       
       
  })} else {
        const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img= entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src') 
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
    });
}, {
    rootMargin: '0px 0px 0px 0px',
    root: document.querySelector('.app')
});

images.forEach(image => imageObserver.observe(image));
  
  
}
})


