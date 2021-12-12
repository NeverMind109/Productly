$(function(){
    // slick slider
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1175,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
        ]
    });

    // burger menu
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    }); 

    // Плавный переход по ссылкам
    $("a.tools__link").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 1000);
    });
});