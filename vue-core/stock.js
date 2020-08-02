var stocks = new Vue({
    el: '#form-id',
    data: {
        stocks: 0,
        products: {
            brand: 'Nick',
            productName: 'T-Shirt',
            selectedVariant: 1,
            inStock: true,
            details: ["Half Sleeves", "Round Neckline", "100% cotton", "Stretchy, light and inexpensive"],
            variants: [
                {
                    id: 1,
                    color: 'black',
                    varientImage: 'images/image-black.png',
                    price: 600,
                    inStock: true
                },
                {
                    id: 2,
                    color: 'orange',
                    varientImage: 'images/image-orange.png',
                    price: 800,
                    inStock: true
                },
                {
                    id: 3,
                    color: 'green',
                    varientImage: 'images/image-green.png',
                    price: 500,
                    inStock: false
                }

            ]
        }
        
    },
    methods: {
        addToCart() {
            this.stocks += 1;
        },

        updateProduct(index) {
            this.products.selectedVariant = index;      
        }

    },

    computed: {
        title() {
            return this.products.brand +' '+ this.products.productName;
        },
        image() {
            return this.products.variants[this.products.selectedVariant].varientImage;
        },
        inStock() {
            return this.products.variants[this.products.selectedVariant].inStock;
        },
        price() {
            return this.products.variants[this.products.selectedVariant].price;
        }
    
    }
});