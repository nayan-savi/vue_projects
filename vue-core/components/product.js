Vue.component('product', {
    data() {
        return {
            selectedUser: 0,
            users: [
                {
                    name: 'Nayan Kumar',
                    contactNo: '7894563210',
                    isPremium: true,
                    shippingAddress: '#202, 2nd Floor, Wing West Apartment, Bangalore-560068',
                    userCarts: [],
                },
                {
                    name: 'Rahul Sing',
                    contactNo: '9876543315',
                    isPremium: false,
                    shippingAddress: '#42, G1, Vue Wing Apartment, Bangalore-560048',
                    userCarts: [],
                }
            ],
            products: {
                brand: 'Nike',
                productName: 'T-Shirt',
                selectedVariant: 1,
                details: ["Half Sleeves", "Round Neckline", "100% cotton", "Stretchy, light and inexpensive"],
                variants: [
                    {
                        id: 1,
                        color: 'black',
                        varientImage: '../images/image-black.png',
                        price: 600,
                        shippingCost: 40,
                        quantity: 10,
                    },
                    {
                        id: 2,
                        color: 'orange',
                        varientImage: '../images/image-orange.png',
                        price: 800,
                        shippingCost: 60,
                        quantity: 5,
                    },
                    {
                        id: 3,
                        color: 'green',
                        varientImage: '../images/image-green.png',
                        price: 500,
                        shippingCost: 90,
                        quantity: 2,
                    }

                ]
            }
        }
    },
    methods: {
        addToCart() {
            let newCart = Object.assign({}, this.products.variants[this.products.selectedVariant]);
            this.products.variants[this.products.selectedVariant].quantity--;
            this.$emit('add-to-cart', newCart, this.user);
        },
        updateProduct(index) {
            this.products.selectedVariant = index;
        },
        updateUser(index) {
            this.selectedUser = index;
        },
        getTotal(cart) {
            let total = 0;
            cart.forEach(e => {
                total += e.price * e.quantity + e.shippingCost
            });
            return total;
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
            return this.users[this.selectedUser].isPremium ? "Free" : this.product.shippingCost;
        },
        user() {
            return this.users[this.selectedUser];
        },
        premiumUser() {
            return this.users[this.selectedUser].isPremium ? "Premium" : "Not Premium";
        }

    },
    props: {
        carts: {
            type: Array
        }
    },
    template: `
    <div class="product" >
        <div class="header-border">
            <span>Cart({{!user ? 0 :user.userCarts.length}})</span>
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
                            <th>{{user.name}}</th>
                        </tr>
                        <tr>
                            <td>{{user.shippingAddress}}</td>
                        </tr>
                        <tr>
                            <td>{{user.contactNo}}</td>
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
                <h2>&#8377;{{product.price}}</h2>
                <div>
                    <h3 v-if="user.isPremium" :class="{premium: user.isPremium}">Shipping: {{shipping}}</h3>
                    <h3 v-else>Shipping: &#8377;{{shipping}}</h3>
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
            <div class="container-cart">
               <div v-if="user.userCarts.length > 0">
                    <div v-for="cart in user.userCarts">
                        <table class="userCart">
                            <tr>
                                <th>
                                    <div>{{title}}</div><br/>
                                    <div class="price">&#8377;{{cart.price * cart.quantity + cart.shippingCost}}</div>
                                </th>
                                <td><img v-bind:src="cart.varientImage" class="userImage" /></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Qty: {{cart.quantity}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="total">
                        Total: &#8377;{{getTotal(user.userCarts)}}
                    </div>
               </div>
            </div>
        </div>
    </div>
    `
})

var stocks = new Vue({
    el: '#form-id',
    data: {
        carts: [],
    },
    methods: {
        updateCart(cart, user) {
            if(user.isPremium) {
                cart.shippingCost = 0;
            }
            if (user.userCarts.length > 0) {
                let cartObj = user.userCarts.find(c => c.id == cart.id);
                if (cartObj != undefined) {
                    cartObj.quantity += 1;
                } else {
                    cart.quantity = 1;
                    user.userCarts.push(cart);
                }
            } else {
                cart.quantity = 1;
                user.userCarts.push(cart);
            }
            
        }
    }
});