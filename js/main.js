const portfolio = document.getElementById("portfolio");

const background = [
    'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(150,88,78,1) 73%)',
    'linear-gradient(90deg, black 0%, #621818 73%)',
    'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(226,177,177,1) 73%)'
];

document.addEventListener('DOMContentLoaded', () => {

    fetch('../data.json')
      .then(response => response.json())
      .then(data => {
        showingData(data)
       
      })
      .catch(error => console.error(error));
});


function showingData(data){
  let i = 0 ;
  
  for ( i = 0 ; i < data.length ; i++){

    const proyecto = data[i];

    //contenedor
    let divContenedor = document.createElement("div");
    divContenedor.setAttribute("id", "proyect" + ((data.length) - i));  
    divContenedor.classList.add("portfolioContainer__project");


    // asignar el fondo en función del índice utilizando el operador módulo
    divContenedor.style.background = background[i % background.length];

    //contenedorTexto
    let divContenedorText = document.createElement("div");     
    divContenedorText.classList.add("portfolioContainer__project__text");

    //Btn del contenedorTexto
    let btnContenedorText = document.createElement("div");     
    btnContenedorText.classList.add("portfolioContainer__project__btn");

    //contenedorImg
    let divContenedorImg = document.createElement("div");     
    divContenedorImg.classList.add("portfolioContainer__project__img");
    divContenedorImg.classList.add("b"+((data.length) - i)+ "background");

    //ACA VAAAAA
    divContenedorText.innerHTML = `
    <h2>${proyecto.titulo}</h2>
    <h3>${proyecto.subtitulo}</h3>
    <p>${proyecto.descripcion}</p>
    `;

    btnContenedorText.innerHTML = `
    <a target="_blank" href="${proyecto.link}">
    Ver web</a> `

    divContenedorText.appendChild (btnContenedorText);

    divContenedorImg.innerHTML = `
    <img class="portfolioContainer__project__img--trait" src="${proyecto.fondoB}" alt="">
    `;

    divContenedor.appendChild(divContenedorText);

    divContenedor.appendChild(divContenedorImg);

    portfolio.appendChild(divContenedor);

    
      
  }

  //INTERSECTIONOBSERVER
  intersectionObserver();
};

function intersectionObserver() {
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

  const bodyImg = document.getElementById ('bodyImg')
  
  containers.forEach((container) => {
    observer.observe(container);
  });
    
  observer.observe(bodyImg);
}