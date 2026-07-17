const productContainer = document.getElementById("productContainer");

async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/products");

        const products = await response.json();

        productContainer.innerHTML = "";

        products.forEach(product => {

            productContainer.innerHTML += `
                <div class="card">

                    <img src="${product.image}" alt="${product.name}">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <h2>₹${product.price}</h2>

                    <button onclick="addToCart('${product._id}')">
                        Add To Cart
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

    const userId = "6a5929af434f5728b7c1b17a";

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