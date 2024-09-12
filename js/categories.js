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
            },
            error: function (error) {
                console.log('Error ${error}');
            }
        });
    }

    getCategories() {
        $.get('http://localhost:3000/categories', (data) => {
            this.categories = data;
            this.renderCategories();
        });
    }

    renderCategories() {
        let categories = this.categories;
        let categoriesList = $('#categories-list');
        categories.forEach((category) => {
            let categoryItem = $(`<li>${category.name}</li>`);
            categoriesList.append(categoryItem);
        });
    }
}