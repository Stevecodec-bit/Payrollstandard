// =====================================
// CREATE DEFAULT ACCOUNT (FIRST RUN)
// =====================================

if (!localStorage.getItem("adminUsername")) {
    localStorage.setItem("adminUsername", "admin");
}

if (!localStorage.getItem("adminPassword")) {
    localStorage.setItem("adminPassword", "admin123");
}

// =====================================
// LOGIN
// =====================================

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const savedUsername =
        localStorage.getItem("adminUsername");

    const savedPassword =
        localStorage.getItem("adminPassword");

    if (username === savedUsername &&
        password === savedPassword) {

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "admin.html";

    } else {

        document.getElementById("loginMessage").textContent =
            "Invalid username or password.";

    }

}

// =====================================
// SHOW / HIDE PASSWORD
// =====================================

function togglePassword() {

    const password =
        document.getElementById("password");

    password.type =
        password.type === "password" ? "text" : "password";

}