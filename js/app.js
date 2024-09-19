$(document).ready(function() {
    
    $("#slideshow__box > div:gt(0)").hide();

    setInterval(function() {
    $('#slideshow__box > div:first')
        .stop()
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow__box');
    }, 1500);


    $("#slideshow__box").show();

});
