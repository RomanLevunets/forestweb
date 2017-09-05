$(document).ready(function() {


    //slider

    $('.news').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
    });


    //header menu active
    $('.bot-list li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.bot-list li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.Lside').toggleClass('active');
        $('.wrapper').toggleClass('bg-active');

    });

        //animation bot services
    var showBotService = (function () {
        $('.services-bottom-icon').click(function () {
            $(this).parent().siblings('.services-middle').slideToggle('slow');
            $(this).parents('.services-item').toggleClass('active');
        });
    });
    showBotService();



    //animation content
    (function($) {
        $.fn.animated = function(inEffect) {
            $(this).each(function() {
                var ths = $(this);
                ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        ths.addClass(inEffect).css("opacity", "1");
                    }
                }, {
                    offset: "90%"
                });

            });
        };
    })(jQuery);




    //deleted animation for mobile
    var isMobile = {
        Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
        BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
        iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
        Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
        any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
    };

    if ( !isMobile.any() ) {
        $(".Tservices-item").animated("fadeInUp");
        $("h3").animated("rollIn");
        $(".services-item").animated("flipInY");
        $(".works h2").animated("zoomIn");
        $(".works-left").animated("slideInRight");
        $(".works-right").animated("slideInLeft");
        $(".studio-left").animated("slideInLeft");
        $(".studio-right").animated("slideInRight");
        $(".works-row li").animated("zoomIn");
        $(".news-item").animated("fadeInUpBig");

    }

    //typed js
    if($(".runing-string").length>0){
        $(".runing-string").typed({
            strings: ["разработка сайтов","что-то еще"],
            typeSpeed: 125,
            backSpeed: 70,
            startDelay: 100,
            loop:true
        });
    }
});

