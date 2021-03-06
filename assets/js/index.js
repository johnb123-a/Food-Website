$(document).ready(function () {
    const IMAGES = new Array(
        './assets/img/food-1.jpg',
        './assets/img/food-2.jpg',
        './assets/img/food-3.jpg',
        './assets/img/food-4.jpg',
        './assets/img/food-5.jpg',
        './assets/img/food-6.jpg',
        './assets/img/food-7.jpg',
        './assets/img/food-8.jpg',
        './assets/img/food-9.jpg',
        './assets/img/food-10.jpg'
    );

    setInterval(function () {
        const randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        $('.container__image').css('background', 'url(' + randomImage + ')');
        $('.content__image').attr('src', '' + randomImage + '')
    }, 5000);

    $('.container__image').mousemove(function (event) {
        const positionX = event.pageX + 'px';
        const positionY = event.pageY + 'px';
        $('.container__image--cursor').css({ 'top': positionY, 'left': positionX })
    })
    $('.header--btn').click(function () {
        $('.header__nav').toggleClass("actived");

    });
});