// add JQuery
function addJQuery() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js');
    script.addEventListener('load', function() {
            var script = document.createElement('script');
            script.textContent = '(' + addCode.toString() + ')();';
            document.body.appendChild(script);
        }, false);
    document.body.appendChild(script);
}

// add the code
function addCode() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ccpc-twn.bath.ac.uk/browseroids/main.js');
    script.addEventListener('load', function() {
            var script = document.createElement('script');
            script.textContent = '(' + go.toString() + ')();';
            document.body.appendChild(script);
        }, false);
    document.body.appendChild(script);
}

// set it going
function go() {
    main();
}

// start the whole thing rocking
addJQuery();

