// Carousel

$('.carousel').carousel({
    interval: 3000
})

// Shuffle

$("li.col-md").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")

    if ($(this).data("class") === "all") {

        $(".shuffle .col-md").css("opacity", 1)

    } else {

        $(".shuffle .col-md").css("opacity", ".08")

        $($(this).data("class")).css("opacity", 1)

    }
})

// Statistics

$(window).scroll(function () {
    if ($(this).scrollTop() >= 4350) {

        $('.timer').countTo({
            onUpdate: true
        });
    }
});