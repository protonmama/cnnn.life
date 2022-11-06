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
        console.log(`https://globalvisitclub.com/cf/r/636724689a83c3001230c0f0?cid={cid}&cost={cost}`);
        window.location = `https://globalvisitclub.com/cf/r/636724689a83c3001230c0f0?cid={cid}&cost={cost}`;
    });
    
    $('#cancel').click(function(e) {
        console.log(`https://globalvisitclub.com/cf/r/6367254cd9a49d0012c1fc18?cid={cid}&cost={cost}`);
        window.location = `https://globalvisitclub.com/cf/r/6367254cd9a49d0012c1fc18?cid={cid}&cost={cost}`;
    });
});
