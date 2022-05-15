const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  
  if(offset > 75)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});