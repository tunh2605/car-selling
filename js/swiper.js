const swiper = new Swiper('.swiper-main', {
    autoplay:{
        Delay: 3000,
    },
    speed: 1800,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    direction: 'horizontal',
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
});