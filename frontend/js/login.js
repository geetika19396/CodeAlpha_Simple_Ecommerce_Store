async function loginUser() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/users/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        if (response.ok) {

            alert("Login Successful!");

            // User ko browser me save kar do
            localStorage.setItem("user", JSON.stringify(data.user));

            // Home page par bhej do
            window.location.href = "index.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);
        alert("Something went wrong!");

    }

}