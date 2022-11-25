$(document).ready(function (){
    var typed = new Typed('.typing-banner', {
        strings:['web designer','wp developer','Freelancer'],
        loop:true,
        typeSpeed:100,
        backSpeed:60,
    });
    var typed = new Typed('.typing-about', {
        strings:['web designer','wp developer','Freelancer'],
        loop:true,
        typeSpeed:100,
        backSpeed:60,
    });
    $(document).ready(function() {
        $(window).scroll(function () {
            // sticky navbar on scroll script
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }

        });
    });



    // Prevent console.log from generating errors in IE for the purposes of the demo
    if ( ! window.console ) console = { log: function(){} };

    // The actual plugin
    $('.top-area').singlePageNav({
        offset: $('.top-area').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });

//skill js code
    $(document).ready(function () {
        $(".skillbar").skillbar({
            speed: 2000,

        });
    });

    //Image Hover

    jQuery(document).ready(function(){

        jQuery(function() {

            jQuery('ul.da-thumbs > li').hoverdir();

        });

    });


    //magnifice popup initlize

    $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
    });
    $('.popup-image1').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-image2').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-image3').magnificPopup({
        type: 'image'
        // other options
    });  $('.popup-image4').magnificPopup({
        type: 'image'
        // other options
    });

//bootstrap scorll to top script

    $('body').materialScrollTop();
})

//wowo js ininlaize
new WOW().init();
