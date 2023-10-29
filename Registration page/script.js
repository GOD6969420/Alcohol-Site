// JavaScript for client-side validation and redirection

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const error_message = document.getElementById("error-message");

    if (name.trim() === "") {
        error_message.innerHTML = "Name is required.";
        return false;
    }

    if (email.trim() === "") {
        error_message.innerHTML = "Email is required.";
        return false;
    }

    if (password.trim() === "") {
        error_message.innerHTML = "Password is required.";
        return false;
    }

    if (password !== confirm_password) {
        error_message.innerHTML = "Passwords do not match.";
        return false;
    }

    if (age < 18) {
        error_message.innerHTML = "You must be at least 18 years old to register.";
        return false;
    }

    // Phone number validation using regex (allows digits and optional dashes)
    const phonePattern = /^(\d{10}|-{9})$/;///^[\d-]+$/;
    if (!phone.match(phonePattern)) {
        error_message.innerHTML = "Invalid phone number format.";
        return false;
    }

    // Assuming all validation passes
    error_message.innerHTML = ""; // Clear any previous error messages

    // Redirect to homepage after successful registration
    window.location.href = "..\Login Page\login.html";

    return true;
}
