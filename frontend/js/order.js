const orderContainer = document.getElementById("orderContainer");

const loggedInUser = JSON.parse(localStorage.getItem("user"));

if (!loggedInUser) {
    alert("Please login first!");
    window.location.href = "login.html";
}

const userId = loggedInUser._id;

async function loadOrders() {

    try {

        const response = await fetch(`http://localhost:5000/orders?user=${userId}`);

        const orders = await response.json();

        orderContainer.innerHTML = "";

        orders.forEach(order => {

            let productsHTML = "";

            order.products.forEach(item => {

                productsHTML += `
                   <div style="margin-bottom:20px; text-align:center;">

                   <img src="http://localhost:5000${item.product.image}" alt="${item.product.name}" width="150">


                    <p>
        
                        <strong>${item.product.name}</strong>
                        (Qty: ${item.quantity})
                    </p>

            </div>
        `;

            });

            orderContainer.innerHTML += `

                <div class="card">

                    <h3>🧾 Order ID</h3>

                    <p>${order._id}</p>

                    ${productsHTML}

                    <h2>Total: ₹${order.totalAmount}</h2>

                </div>

            `;

        });

    } catch (error) {

        console.log(error);

    }

}

loadOrders();
function logout() {

    localStorage.removeItem("user");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}