document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const noEmailFoundMessage = document.getElementById("no-email-found-message");

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = emailInput.value;

            // Send a POST request to reset-password.php
            fetch("reset-password.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `email=${encodeURIComponent(email)}`,
            })
                .then((response) => response.text())
                .then((data) => {
                    if (data === "Email not found.") {
                        noEmailFoundMessage.textContent = data;
                        noEmailFoundMessage.style.display = "block";
                        confirmationMessage.style.display = "none";
                    } else {
                        confirmationMessage.textContent = data;
                        confirmationMessage.style.display = "block";
                        noEmailFoundMessage.style.display = "none";
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
    }
});
