const orderContainer = document.getElementById("orderContainer");

async function loadOrders() {

    try {

        const response = await fetch("http://localhost:5000/orders");

        const orders = await response.json();

        orderContainer.innerHTML = "";

        orders.forEach(order => {

            let productsHTML = "";

            order.products.forEach(item => {

                productsHTML += `
                    <p>
                        <strong>${item.product.name}</strong>
                        (Qty: ${item.quantity})
                    </p>
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