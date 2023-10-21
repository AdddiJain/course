var indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 2500);
    var x;
    const img = document.querySelectorAll(".section7 img");
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) { indexValue = 1 }
    img[indexValue - 1].style.display = "block";
}
slideShow();

$(".owl-carousel-main").owlCarousel({
    loop: false,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    items: 1,
});
$(".owl-carousel").owlCarousel({
    loop: false,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
    },
});