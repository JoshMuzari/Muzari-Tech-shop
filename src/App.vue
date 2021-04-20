<template>
<div>


<!--NAVBAR-->
<nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
     <div class="container">
        <router-link class="navbar-brand" to="#hero"><i class="fas fa-microchip">Muzari Tech-Shop</i></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#hero">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products">Products</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#about-us">About-Us</a>
            </li>
          
          </ul>
          
        </div>

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          </form>
     </div>
     <div>
      <form class="form-inline my-2 my-lg-0">
        <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login" @click="goToHome()">Get Start</a>
  
      </form>
      </div>
      <div>
      <form class="form-inline my-2 my-lg-0">
        <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart"  href="#cart">
          {{cart.length}} in cart
            <i class="fas fa-cart-plus"></i>
            </a>
      </form>
      </div>
</nav>

<br>


<!--HERO-->
<div class="hero" id="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                 Muzari Tech-Shop
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5">
                   <a href="#about-us" button class="btn custom-btn btn-outline-primary mr-4">About Us</a>
                  <a href="#products" class="btn btn-primary">Products</a>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="./views//graphic.svg" alt="image">
                </div>
            </div>
          </div>
        </div>
    </div>

<div id="app">

    <HelloWorld/>
 

<div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">

   
              
              <!-- <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Book 2</h5>
                            <p class="card-text">
                                Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint & more. Select your suite during checkout.
                            </p>
                            <small>$599</small>
                            <br>
                            <a href="#" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div> -->
 <div>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}</h3>
        <p>{{product.text}}</p>
        <div class="cost">{{product.cost}}</div>
        <img :src="product.image" />
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>

                  <!-- <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">hameno</h5>
                            <p class="card-text">
                                Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint & more. Select your suite during checkout.
                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                  </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Laptop 2</h5>
                            <p class="card-text">
                               Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved performance and the full Windows 10 Home experience.
                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PlayStation 3 Slim 120GB (Old Model)</h5>
                            <p class="card-text">
                                    The PlayStation 3 (PS3) is a home video game console developed by Sony Computer Entertainment. The first console to use Blu-ray Disc as its primary storage medium.

                            </p>
                            <small>$110</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product5.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PlayStation 4  1TB</h5>
                            <p class="card-text">
                                    A home video game console developed by Sony Computer Entertainment. The console's controller was also redesigned, with improved buttons and analog sticks, and an integrated touchpad.
                            
                            </p>
                           
                           
                            <small>$230</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                            

                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">PlayStation 5 120GB</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Surface Studio 2</h5>
                            <p class="card-text">
                                    The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <small>$599</small>
                            <br>
                            <a href="##" v-on:click="addItemToCart(product)" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div> -->





          </div>
      </div>
</div>
</div>


<!--HOME-->

<div class="about-us" id="about-us">
<div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="./views/product.svg" alt="" width="400">
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
          </p>
           <a href="#products" button class="btn custom-btn btn-outline-primary mr-4">Browse Products</a>
        </div>
      </div>
    </div>
    <login></login>

    <mini-cart></mini-cart>

  </div>


  






</div>


    <!-- <header>
      <button v-on:click="navigateTo('product')">View products</button>
     
      <button v-on:click="navigateTo('/src/components/Cart.vue')">View Cart</button>
    </header>

    <div v-if="page === 'cart'">
      <Cart v-on:removeItemFromCart="removeItemFromCart" :cart="cart" />
    </div>

    <div v-if="page === 'product'">
      <Products v-on:addItemToCart="addItemToCart" />
    </div>
  </div> -->
         <!-- <div>
    <h1>Products</h1>
    <div class="products">
      <div v-for="(product, index) in products" :key="index">
        <h3>{{product.name}}</h3>
        <div class="cost">{{product.cost}}</div>
        <img :src="product.image" />
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div> -->

<div>
    <div class="cart" id="cart">
    <h1 class="text-center p-5"> Your Cart</h1>
    <div class="products">
      <div v-for="(product, index) in cart" :key="index">
        <h3>{{product.name}}</h3>
        <img :src="product.image" />
        <div>{{product.cost}}</div>
        <button v-on:click="removeItemFromCart(product)">Remove from cart</button>
        <br>
        <br>
        <button v-on:click="buyItem(product)">Buy</button>
      </div>
    </div>
    
  </div>
   

    <footer>

 <a class="nav-link" href="#hero">TOP</a>
<small>Muzari Tech-Shop made by Joshua Muzari 15April 2021 muzarij@gmail.com</small>


</footer>

  </div>
<router-view></router-view>

 

  <!-- <div id="hero"></div> -->
 <router-view/>






</template>

<script>

import HelloWorld from './components/Navbar.vue'
// import Cart from "./components/Cart.vue";
import Firebase from 'firebase'
import toastr from 'toastr'

let config ={

 apiKey: "AIzaSyCPKwGiNT1Hojvl_I4v3aKIgJ2RoqfZfCg",
    authDomain: "tech-shop-14ea4.firebaseapp.com",
    databaseURL: "https://tech-shop-14ea4-default-rtdb.firebaseio.com",
    projectId: "tech-shop-14ea4",
    storageBucket: "tech-shop-14ea4.appspot.com",
    messagingSenderId: "136273082546",
    appId: "1:136273082546:web:71f3041c72174e11d371ab",
    measurementId: "G-9TT0KP0E97"
}

let app = Firebase.initializeApp(config)
let db = app.database()
let textRef = db.ref('text')
export default {
  name: 'App', firebase:{
    product : textRef
  },
  data: () => {
    return {
      text:{
          text :''
      },
    cart: [],
    HelloWorld,
    products:[
      {
        name: "Laptop",
        cost: "$439",
        image:
            "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL640_FMwebp_QL65_.jpg",
            text: "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
        },

        {
        name: "Laptop",
        cost: "$649",
        image:
            "https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL640_FMwebp_QL65_.jpg",
            text: "Lenovo Flex 5 14 2-in-1 laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
        },

        {
        name: "Laptop",
        cost: "$227",
        image:
            "https://m.media-amazon.com/images/I/810BY5U9baL._AC_UL640_FMwebp_QL65_.jpg",
            text: "ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode with One Year of Microsoft 365 Personal, L210MA-DB01"
        },

        {
        name: "Laptop",
        cost: "$649",
        image:
            "https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UL640_FMwebp_QL65_.jpg",
            text: "Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812"
        },

        {
        name: "Laptop",
        cost: "$272",
        image:
            "https://m.media-amazon.com/images/I/812MizmMvkL._AC_UL640_FMwebp_QL65_.jpg",
            text: "Lenovo Chromebook C330 2-in-1 Convertible Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 81HY0000US, Blizzard White"
        },

        {
        name: "Laptop",
        cost: "$261",
        image:
            "https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_UL640_FMwebp_QL65_.jpg",
            text: "Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch, 4GB LPDDR4, 32GB eMMC, Gigabit Wi-Fi 5, Bluetooth 5.0, Google Chrome, CP311-2H-C679"
        },

         {
        name: "iPhone",
        cost: "$834",
        image:
            "https://m.media-amazon.com/images/I/61GggH1hAaL._AC_UY436_FMwebp_QL65_.jpg",
            text: "Apple iPhone 11 Pro Max, 256GB, Midnight Green, Fully Unlocked (Renewed)"
        },

         {
        name: "iPhone",
        cost: "$1100",
        image:
            "https://m.media-amazon.com/images/I/71cSV-RTBSL._AC_UY436_FMwebp_QL65_.jpg",
            text: "New Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription"
        },

         {
        name: "Samsung",
        cost: "$999",
        image:
            "https://m.media-amazon.com/images/I/61GCKHqbcxL._AC_UY436_FMwebp_QL65_.jpg",
            text: "Samsung Galaxy S21+ Plus 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G996UZVAXAA)"
        },

         {
        name: "Samsung",
        cost: "$799",
        image:
            "https://m.media-amazon.com/images/I/512Va+-kCJL._AC_UY436_FMwebp_QL65_.jpg",
            text: "Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G991UZVAXAA)"
        },


         {
        name: "Playstation",
        cost: "$452",
        image:
            "https://m.media-amazon.com/images/I/715RBdgZtHL._AC_UY436_FMwebp_QL65_.jpg",
            text: "PlayStation 4 Console - 1TB Slim Edition"
        },

         {
        name: "Playstation",
        cost: "$799",
        image:
            "https://m.media-amazon.com/images/I/61M2zd+YGUL._AC_UY436_FMwebp_QL65_.jpg",
            text: "2021 PlayStation Console PS5 Disk Version with Eight Controllers and Accessory"
        },

        {
        name: "X-Box",
        cost: "$349",
        image:
            "https://m.media-amazon.com/images/I/61oFqsoj9nL._AC_UY436_FMwebp_QL65_.jpg",
            text: "Xbox 360 250GB Slim Console - (Renewed)"
        },

         {
        name: "X-Box",
        cost: "$465",
        image:
            "https://m.media-amazon.com/images/I/717YnP2CrmL._AC_UY436_FMwebp_QL65_.jpg",
            text: "Microsoft - Xbox Series S 512 GB All-Digital Console (Disc-Free Gaming) Bundle Star Wars: Jedi Fallen Order for Xbox One W/ 4K HDMI"
        },
      
    ]
     
    };
},

methods: {
      
    addItemToCart(product) {
      this.cart.push(product);
    },

    buyItem(product) {
      this.push(product);
      toastr.success('Purchased')
    },
    removeItemFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page) {
      this.page = page;
    }
  },
  components: { HelloWorld }
};

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
.products {
  display: grid;
  grid-column-gap: 150px;
  grid-row-gap: 100px;
  grid-template-columns: 1fr 1fr;
  
}
.products button {
  padding: 10px;
  background-color: black;
  color: rgb(255, 255, 255);
  outline: none;
  border: none;
  cursor: pointer;
}
</style>

<style scoped>
header {
  height: 60px;
  box-shadow: 2px 2px 5px blue;
  background-color: pink;
  text-align: right;
  font-size: 30px;
  padding-top: 20px;
}
header button {
  padding: 10px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: green;
}
</style>
