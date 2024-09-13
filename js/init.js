$.get('templates/navigation.html', function(data) {
    $('#nav-placeholder').replaceWith(data);
});

$.get('templates/footer.html', function(data) {
    $('#footer-placeholder').replaceWith(data);
});


$(function() { 
    loadScript('js/categories.js', categoriesSetup);
    loadScript('js/products.js', productsSetup);
})

var categoriesSetup = function() {
    let categories = new Categories();
    categories.getAllCategories();
    categories.getSingleCategory(decodeURIComponent(urlParam('category')));

}

var productsSetup = function() {
    console.log('products here');
    // categories = new Categories();
    // categories.init();
}

function loadScript(url, callback) {
    var head = document.head
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match){
        return match.toUpperCase();
    });
};

function urlParam(name) {
    var results = new RegExp('[?&]' + name + "=([^&#]*)").exec(window.location.href);
    if (results == null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}