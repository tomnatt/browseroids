function main() {

    var css = "<style>.b_block { border: thick solid red; }</style>";
    $('body').prepend(css);

    $('img#header-img').each(function() {
        $(this).addClass("b_block");
        var img = getOffset(this);
        console.log(img.left, img.top, img.width, img.height);
    });
    
    //var x = getOffset( document.getElementById('yourElId') ).left;
    
    $(document).mousemove(function(e){
        var place = "outside";
        if (inside(e.pageX, e.pageY)) {
            place = "inside";
        }
        console.log(e.pageX + ', ' + e.pageY + ' - ' + place);
        console.log("22 0 434 92"); 
    }); 
}

function inside(x, y) {
    
    return false;
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    var _w = el.offsetWidth;
    var _h = el.offsetHeight;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x, width: _w, height: _h };
}
 
function block(topleft, topright, bottomleft, bottomright) {
    this.topleft = topleft;
    this.topright = topright;
    this.bottomleft = bottomleft;
    this.bottomright = bottomright;
}
