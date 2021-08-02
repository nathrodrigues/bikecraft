if (window.SimpleSlide){
new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

   //Slide vai sempre na tag que está o container (está segurando o conteúdo) 

  new SimpleSlide({
    slide: 'portfolio', 
    time: 5000, 
    nav: true,
  });

}

if (window.SimpleAnime) {

new SimpleAnime();

}