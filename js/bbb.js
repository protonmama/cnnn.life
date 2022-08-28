$(document).ready(function() {
    $('.big-blue-link').each(function(i, el) {
        var buttonContainer = $('<div/>', {
            'class': 'big-blue-button-container'
        });
        $(el).after(buttonContainer);
        $(el).appendTo(buttonContainer).removeClass('big-blue-link').addClass('big-blue-button');
    })
})