const productDetails = document.getElementById("productDetails");

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

async function loadProduct() {

    try {

        const response = await fetch(`http://localhost:5000/products/${productId}`);

        const product = await response.json();
        console.log(product);
        console.log(product.image);

        productDetails.innerHTML = `

        <div class="card">

        <img src="http://localhost:5000${product.image}" width="250" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <h3>₹${product.price}</h3>

            <button onclick="addToCart('${product._id}')">

                Add To Cart

            </button>

        </div>

        `;

    }

    catch(error){

        console.log(error);

    }

}

loadProduct();

async function addToCart(productId){

const loggedInUser = JSON.parse(localStorage.getItem("user"));

if(!loggedInUser){

alert("Please Login First");

window.location.href="login.html";

return;

}

const userId=loggedInUser._id;

await fetch("http://localhost:5000/cart",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

user:userId,

product:productId,

quantity:1

})

});

alert("Product Added Successfully!");

}