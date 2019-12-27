function someSnowflakes() {
    let s = '';
    let max = 100;
    for (var i = 0; i<=30; i++) {
        s = s.concat(
            s.length == 0?"":", ",
            Math.floor(Math.random() * Math.floor(max)), "vw ",
            Math.floor(Math.random() * Math.floor(max)), "vh ", 0,
            Math.floor(Math.random() * Math.floor(2)), "rem #fff"
        );
    };
    return s;
}

function letItSnow() {
    let d = document.documentElement;
    d.style.setProperty('--s1', someSnowflakes());
    d.style.setProperty('--s2', someSnowflakes());
    d.style.setProperty('--s3', someSnowflakes());
    //alert("This audio may be inappropriate for some users.");
}

document.addEventListener( "DOMContentLoaded", function(){ document.removeEventListener( "DOMContentLoaded", arguments.callee, false); letItSnow(); }, false );