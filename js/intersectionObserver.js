// api Intersection Observer para la carga de los elementos que contienen los proyectos cuando entran al viewport 
document.addEventListener('DOMContentLoaded', function() {

  //INTERSECTIONOBSERVER
  const chargeMain = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };
  
  const observer = new IntersectionObserver(chargeMain,{
    // el null es por q hace ref al visualViewport, si en vez de esto hace ref a otro elemento al pasar por encima, no iria null
    root: null,
    rootMargin: '0px 0px -100px 0px',
    // el threshold es, si queres que aparte cuando todo el elemento este dentro, iria 1.0, si cuando la mitad ya ingreso 0.5
    // threshold: 0.2
  });
  
  const containers = document.querySelectorAll('.portfolioContainer__project');
  console.log(containers);
  const bodyImg = document.getElementById ('bodyImg')
  
  containers.forEach((container) => {
    observer.observe(container);
  });
    
  observer.observe(bodyImg);

});