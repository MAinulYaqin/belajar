var loader;

function loaderpage(){
    loader = setTimeout(pagemuncul, 2400);
}
function pagemuncul(params) {
    document.getElementById('container').style.visibility = 'visible';
    document.getElementById('loader').style.visibility = 'hidden';
}

function navbar_muncul(){
    var muncul = document.getElementById('a-button-show');
    if (muncul.className === 'download') {
        x.className += 'download-show';
    } else {
        x.className += 'download-show';
    }
}