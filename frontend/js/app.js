const productContainer = document.getElementById("productContainer");

async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/products");

        const products = await response.json();

        productContainer.innerHTML = "";

        products.forEach(product => {

            productContainer.innerHTML += `
                <div class="card">

                    <img src="http://localhost:5000${product.image}" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <h2>₹${product.price}</h2>

                    <button onclick="addToCart('${product._id}')">
                        Add To Cart
                    </button>

                    <button onclick="viewProduct('${product._id}')">
                        View Details
                    </button>

                </div>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}

loadProducts();

async function addToCart(productId) {

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

     if (!loggedInUser) {
    alert("Please login first!");
    window.location.href = "login.html";
    return;
}

const userId = loggedInUser._id;

    try {

        const response = await fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userId,
                product: productId,
                quantity: 1
            })
        });

        const data = await response.json();

        alert("Product Added To Cart Successfully!");

        console.log(data);

    } catch (error) {

        console.log(error);

        alert("Something went wrong!");

    }

}

function viewProduct(productId) {

    window.location.href = `product.html?id=${productId}`;

}