$(document).ready(function() {
    if (getURLParameter('instscroll') === '1') {
        $('.scrollto-instruction').addClass('clickable').css({'color':'red'});
        $('.scrollto-instruction').click(function(e) {
            e.preventDefault();
            $('html,body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 100
                },
                1000);
        });
    } else {
        $('.scrollto-instruction').click(function(e) {
            e.preventDefault();
        });
    }
});