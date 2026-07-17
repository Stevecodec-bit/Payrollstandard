// Create default account
if (localStorage.getItem("adminUsername") == null) {
    localStorage.setItem("adminUsername", "admin");
}

if (localStorage.getItem("adminPassword") == null) {
    localStorage.setItem("adminPassword", "admin123");
}

// Load current username
document.getElementById("username").value =
localStorage.getItem("adminUsername");

function changePassword() {

    const username =
    document.getElementById("username").value.trim();

    const oldPassword =
    document.getElementById("oldPassword").value;

    const newPassword =
    document.getElementById("newPassword").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    const currentPassword =
    localStorage.getItem("adminPassword");

    const msg =
    document.getElementById("msg");

    msg.innerHTML = "";

    if (username === "") {
        msg.innerHTML = "Username cannot be empty.";
        return;
    }

    if (oldPassword !== currentPassword) {
        msg.innerHTML = "Current password is incorrect.";
        return;
    }

    if (newPassword.length < 4) {
        msg.innerHTML = "Password must be at least 4 characters.";
        return;
    }

    if (newPassword !== confirmPassword) {
        msg.innerHTML = "Passwords do not match.";
        return;
    }

    localStorage.setItem("adminUsername", username);
    localStorage.setItem("adminPassword", newPassword);

    alert("Username and password updated successfully.");

    window.location = "admin.html";
}

// Show / Hide Passwords
function togglePasswords() {

    const ids = [
        "oldPassword",
        "newPassword",
        "confirmPassword"
    ];

    ids.forEach(function(id) {

        const input = document.getElementById(id);

        input.type =
        input.type === "password"
        ? "text"
        : "password";

    });

}