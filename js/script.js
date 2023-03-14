// Menú
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".nav");

    $btnMenu.addEventListener ( "click",(e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    // Esto es para que al momento que se presione sobre alguna seccion del menu, se cierre el menu y navege hasta la seccion que clickeó.
    
    d.addEventListener("click" ,(e) => {
        if(!e.target.matches(".nav__a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });


})(document);



//Formulario

((d) => {
    // Se le coloca $ para que sepamos que es un elemnto dentro del DOM.
    const $form = d.querySelector(".contact__form"),
    $loader = d.querySelector(".contact-form__loader"),
    $response = d.querySelector(".modal-content__form");

    $form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/neremiasverondev@gmail.com",{
            method : "POST" , 
            body: new FormData(e.target)
        })

        // SI LA RTA ES OK, SE EJECUTA ESTO.
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            $loader.classList.add("none");

            // location controla todas las partes de la URL.
            location.hash = "#gracias";
            $form.reset();

        })
        // DE LO CONTRARIO, EJECUTA EL CATCH PARA AGARRAR EL ERROR.
        .catch((err) => {
            console.log(err);
            let mensaje = err.statusText || "Error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${mensaje}`;
        }).finally(() => {
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash = "close";
            },3000);
        });
        
        
    })
})(document);


// Animaciones
window.sr = ScrollReveal();

    sr.reveal('.header' , {
        duration: 3000 ,
        origin: 'bottom', 
        distance: '-50px'

    });
    sr.reveal('.container-links' , {
         duration: 3000 ,
         origin: 'bottom', 
         distance: '100px'

    });
     sr.reveal('.hero-image__container' , {
         duration: 3000 ,
         origin: 'bottom', 
         distance: '-100px'
    });
    sr.reveal('.about__container' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '400px'

    });
    sr.reveal('.skills__article' ,  {
        duration: 1500 ,
        origin: 'left', 
        distance: '50%'
    });
    sr.reveal('.section__projects' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '20%'
    });
    sr.reveal('.services__container' , {
        duration: 1500 ,
        origin: 'left', 
        distance: '400px'
    });
    sr.reveal('.section__contact' , {
        duration: 1500 ,
        origin: 'bottom', 
        distance: '400px'
    });