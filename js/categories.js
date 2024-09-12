class Categories {
    constructor() {
        this.apiUrl = 'https://fakestoreapi.com/';
    }

    getAllCategories (){
        $.ajax({
            url: this.apiUrl + 'products/categories',
            type: 'GET',
            success: function (data) {
                console.log(data);
                $(data).each(function (index, category) {
                $('.categories').append('<a class="dropdown-item" href="/category.html?category='
                    + encodeURIComponent(category) + '">'
                    +  toTitleCase(category) + '</a>');
            });
            },
            error: function (error) {
                console.log('Error ${error}');
            }
        });
    }
    }