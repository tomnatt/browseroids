function main() {

    var css = "<style>.b_block { border: thick solid red; }</style>";
    $('body').prepend(css);

    var objects = new Array();
    $('img').each(function() {
        $(this).addClass("b_block");
        objects.push(getObject(this));
    });
    
    $(document).mousemove(function(e){
        var place = "outside";
        
        for (var i = 0; i < objects.length; i++) {
            if (inside(objects[i], e.pageX, e.pageY)) {
                place = "inside";
            }
        }
        console.log("x:"+e.pageX + ', y:' + e.pageY + ' - ' + place);
    }); 
}

function inside(obj, x, y) {
    
    if (x <= parseInt(obj.right)
        && x >= parseInt(obj.left)
        && y >= parseInt(obj.top)
        && y <= parseInt(obj.bottom)) {
            
        return true;
    }
        
    // else
    return false;
}

function getObject(el) {
    var _x = 0;
    var _y = 0;
    var _w = el.offsetWidth;
    var _h = el.offsetHeight;
    while ( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { left: _x, right: _x + _w, top: _y, bottom: _y + _h };
}
