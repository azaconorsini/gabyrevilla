    $(document).ready(function(){
    //========================================================
    // Script para efecto de menú principal

        $('#show-toggle').click(function(){
            $('#navbar').addClass('open');
            // disableScroll();
       });
       $('#hide-toggle').click(function(){
            $('#navbar').removeClass('open');
            // enableScroll() 
       })

       // Obtenemos los eventos que se producen por teclado
       var keys=[32,33,34,35,36,37,38,39,40];

       function preventDefault(e){
            e=e || window.event;
            if(e.preventDefault){
                e.preventDefault();
            }
            e.returnValue=false;
       }

       // Función que activa y reconoce los eventos del teclado
       function keydown(e) {
            for (var i = keys.length; i--;) {
                if (e.keyCode === keys[i]) {
                    preventDefault(e);
                    return;
                }
            }
        }

        function wheel(e){
            preventDefault(e);
        }
        // Deshabilita el scroll del sitio web
        function disableScroll(){
            if(window.addEventListener){
                window.addEventListener('DOMMouseScroll', wheel, false);
            }
            window.onmousewheel=document.onmousewheel=wheel;
            document.onkeydown=keydown;
            disableScrollMobile();
        }
        // Activa el scroll
        function enableScroll() {
            if(window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', wheel, false);
            }
            window.onmousewheel=document.onmousewheel=document.onkeydown=null;
            enableScrollMobile();
        }
        // Función para activar y deshabilitar scroll en dispositivos móviles
        function disableScrollMobile() {
            document.addEventListener('touchmove', preventDefault, false);
        }
        function enableScrollMobile() {
            document.removeEventListener('touchmove', preventDefault, false);
        }

//========================================================
// Activación y ajustes de comportamiento del carousel

$('.carousel-fluid').carousel({
    interval: 7000,
    wrap: true,
    pause: "false"
});

//========================================================
// Touch Swipe carousel

$(".swipe-carousel").swipe({
    swipeLeft: function() {
        $(".swipe-carousel").swipe("enable");
        $(this).carousel("next");
    },
    swipeRight: function() {
        $(".swipe-carousel").swipe("enable");
        $(this).carousel("prev");
    },
    preventDefaultEvents: false,
    threshold: 0,
    allowPagesScroll: "vertical"
});

//========================================================
// Ajustes de propiedades para el carousel de productos
$('.owl-carousel').owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        768: {
            items: 3
        },
        1280: {
            items: 4
        },
        1440: {
            items: 5
        }
    },
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    lazyLoad:true
});

})

