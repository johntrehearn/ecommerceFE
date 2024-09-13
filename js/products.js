class Products {
    constructor() {
        this.apiUrl = 'https://fakestoreapi.com/';
    }

    getSingleProduct(id) {
        $.ajax({
            url: this.apiUrl + 'products/' + id,
            type: 'GET',
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log('Error ${error}');
            }
        });
    }

}



