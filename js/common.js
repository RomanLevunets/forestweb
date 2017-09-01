$(document).ready(function() {


    //slider

    $('.news').slick({
        dots: true,
        arrows: false,
        speed: 1000,
    });
    //height service-top block====
    function item(){
        $('.services-top').each(function () {
            var ths = $(this),
                thsh = ths.find('.services-top-txt').outerHeight();
            ths.find('.services-top-img').css('min-height', thsh);
        });
    }item();

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
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });

    var showBotService = (function () {
        $('.services-bottom-icon').on('click',function () {
            $(this).parent().siblings('.services-middle').slideToggle('slow');
            $(this).parents('.services-item').toggleClass('active');
        });
    });
    showBotService();

    var showTopService = (function () {
        $('.Tservices-item-more').on('click', function () {
            $(this).parents('.Tservices-item').toggleClass('active');
            $(this).parent().siblings('.Tservices-item').removeClass('active');
        });
    });
    showTopService();
});

