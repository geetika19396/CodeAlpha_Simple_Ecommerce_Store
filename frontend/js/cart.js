const cartContainer = document.getElementById("cartContainer");

const totalPrice = document.getElementById("totalPrice");

const loggedInUser = JSON.parse(localStorage.getItem("user"));

if (!loggedInUser) {
    alert("Please login first!");
    window.location.href = "login.html";
}

const userId = loggedInUser._id;

async function loadCart() {

    try {

        const response = await fetch(`http://localhost:5000/cart?user=${userId}`);

        const cartItems = await response.json();
       
        cartContainer.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {

            cartContainer.innerHTML += `
                <div class="card">

                    <img src="${item.product.image}" alt="${item.product.name}">

                    <h3>${item.product.name}</h3>

                    <p>${item.product.description}</p>

                    <h2>₹${item.product.price}</h2>

                    <div class="quantity">

                        <button onclick="updateQuantity('${item._id}', ${item.quantity - 1})">➖</button>

                        <span>${item.quantity}</span>

                        <button onclick="updateQuantity('${item._id}', ${item.quantity + 1})">➕</button>

                    </div>

                    <button onclick="removeFromCart('${item._id}')">
                        🗑 Remove
                    </button>

                </div>
            `;

            total += item.product.price * item.quantity;

        });

        totalPrice.innerHTML = `Total: ₹${total}`;

    } catch (error) {

        console.log(error);

    }

}

loadCart();

async function removeFromCart(cartId) {

    try {

        const response = await fetch(`http://localhost:5000/cart/${cartId}`, {
            method: "DELETE"
        });

        const data = await response.json();

        alert(data.message);

        loadCart();

    } catch (error) {

        console.log(error);

        alert("Something went wrong!");

    }

}

async function updateQuantity(cartId, quantity) {

    if (quantity < 1) {
        return;
    }

    try {

        const response = await fetch(`http://localhost:5000/cart/${cartId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                quantity: quantity
            })

        });

        await response.json();

        loadCart();

    } catch (error) {

        console.log(error);

        alert("Something went wrong!");

    }

}

async function placeOrder() {

    try {

        const response = await fetch(`http://localhost:5000/cart?user=${userId}`);
        const cartItems = await response.json();

        let products = [];
        let totalAmount = 0;

        cartItems.forEach(item => {

            products.push({
                product: item.product._id,
                quantity: item.quantity
            });

            totalAmount += item.product.price * item.quantity;

        });

        console.log(products);
        console.log(totalAmount);
        console.log(userId);

        const orderResponse = await fetch("http://localhost:5000/orders", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                user: userId,
                products,
                totalAmount
            })

        });

        await orderResponse.json();

        alert("🎉 Order Placed Successfully!\n\nThank you for shopping with CodeAlpha E-Commerce Store.");

        window.location.href = "order.html";

        loadCart();

    } catch (error) {

        console.log(error);

        alert("Something went wrong!");

    }

}