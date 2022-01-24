const swiper = new Swiper('.swiper-init',{
    slidesPerView: 4,
    spaceBetween: 20,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        1920: {
            slidesPerView: 4,
        },
        1194: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        564: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        200: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
      }
});

const swiper2 = new Swiper('.swiper-init_2',{
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(function(){
	$(".offer-items .triger.active").children(".item-content").slideDown('fast');
	$(".offer-items .triger").click(function(){
		$(this).siblings(".triger").removeClass("active").children(".item-content").slideUp('fast');
		$(this).toggleClass("active").children(".acordion-content").slideToggle("fast");
	});
});

$(function(){
	$(".accordion-items .footer-wrap__accordion.actives").children(".footer-list__accordion").slideDown('fast');
	$(".accordion-items .footer-wrap__accordion").click(function(){
		$(this).siblings(".footer-wrap__accordion").removeClass("actives").children(".footer-list__accordion").slideUp('fast');
		$(this).toggleClass("actives").children(".footer-list__accordion").slideToggle("fast");
	});
});

