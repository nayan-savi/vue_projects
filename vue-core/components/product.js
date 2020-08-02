Vue.component('product', {
    data() {
        return {
            stocks: 0,
            shippingCost: 40,
            selectedUser: 0,
            users: [
                {
                    name: 'Nayan Kumar',
                    contactNo: '7894563210',
                    isPremium: true,
                    shippingAddress: '#202, 2nd Floor, Wing West Apartment, Bangalore-560068'
                },
                {
                    name: 'Rahul Sing',
                    contactNo: '9876543315',
                    isPremium: false,
                    shippingAddress: '#42, G1, Vue Wing Apartment, Bangalore-560048'
                }
            ],
            products: {
                brand: 'Nick',
                productName: 'T-Shirt',
                selectedVariant: 1,
                details: ["Half Sleeves", "Round Neckline", "100% cotton", "Stretchy, light and inexpensive"],
                variants: [
                    {
                        id: 1,
                        color: 'black',
                        varientImage: '../images/image-black.png',
                        price: 600,
                        quantity: 10,
                    },
                    {
                        id: 2,
                        color: 'orange',
                        varientImage: '../images/image-orange.png',
                        price: 800,
                        quantity: 5,
                    },
                    {
                        id: 3,
                        color: 'green',
                        varientImage: '../images/image-green.png',
                        price: 500,
                        quantity: 0,
                    }

                ]
            }
        }
    },
    methods: {
        addToCart() {
            this.stocks += 1;
        },

        updateProduct(index) {
            this.products.selectedVariant = index;
        },
        updateUser(index) {
            this.selectedUser = index;
        }
    },
    computed: {
        title() {
            return this.products.brand + ' ' + this.products.productName;
        },
        product() {
            return this.products.variants[this.products.selectedVariant];
        },
        shipping() {
            return this.users[this.selectedUser].isPremium ? "Free" : "40";
        },
        user() {
            return this.users[this.selectedUser];
        },
        premiumUser() {
            return this.users[this.selectedUser].isPremium ? "Premium" : "Not Premium";
        },

    },

    template: `
    <div class="product" >
        <div class="header-border">
            <span>Cart({{stocks}})</span>
        </div>
        <div class="box">
            <select v-model="selectedUser" @change="updateUser(selectedUser)">
                <option value="-1"></option>
                <option v-for="(user, index) in users" 
                v-bind:value="index"
                :key="index">{{user.name}}</option>
            </select>
        </div>
        <div class="container" v-if="selectedUser >= 0">
            <div class="container-product">
                <div class="product-image">
                    <img v-bind:src="product.varientImage" class="image" />
                </div>
                <div class="user-deatils">
                    <table>
                        <tr>
                            <th>Name:</th>
                            <td>{{user.name}}</td>
                        </tr>
                        <tr>
                            <th>User:</th>
                            <td>{{premiumUser}}</td>
                        </tr>
                        <tr>
                            <th>ContactNo:</th>
                            <td>{{user.contactNo}}</td>
                        </tr>
                        <tr>
                            <th>Adress:</th>
                            <td>{{user.shippingAddress}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="container-details">
                <h1>{{title}}</h1>
                <div :class="{line: !product.quantity > 0}">
                    <h3 v-if="product.quantity > 0">In Stock</h3>
                    <h3 v-else>Out of Stock</h3>
                </div>
                <h4>Rs.{{product.price}}</h4>
                <div>
                    <h3 v-if="user.isPremium" :class="{premium: user.isPremium}">Shipping: {{shipping}}</h3>
                    <h3 v-else>Shipping: Rs.{{shipping}}</h3>
                    <h3>Quantity: {{product.quantity}}</h3>
                </div>
                <ul>
                    <li v-for="detail in products.details">{{detail}}</li>
                </ul>
                <div v-for="(variant, index) in products.variants" :key="variant.id"
                    @mouseover="updateProduct(index)" class="color-box" :style="{backgroundColor: variant.color}">
                </div>
                <div class="carts">
                    <button :class="{disabled : !product.quantity > 0}" v-on:click="addToCart" :disabled="!product.quantity > 0">ADD TO
                        CART</button>
                </div>
            </div>
            
        </div>
        
    </div>
    `
})

var stocks = new Vue({
    el: '#form-id',
});