<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        return;
    }

    // Load user data from the JSON file
    $userData = file_exists('..\Registration page\users.json') ? json_decode(file_get_contents('..\Registration page\users.json'), true) : [];

    $userExists = false;
    $newPassword = 'new123'; // You can generate a new password or set it to a default value

    foreach ($userData as &$user) {
        if ($user['email'] === $email) {
            $userExists = true;
            // Update the user's password with the new one
            $user['password'] = password_hash($newPassword, PASSWORD_DEFAULT);
            break;
        }
    }

    if (!$userExists) {
        echo "Email not found.";
    } else {
        // Save the updated user data back to the JSON file
        file_put_contents('..\Registration page\users.json', json_encode($userData, JSON_PRETTY_PRINT));
        echo "Password reset for $email. Your new password is 'new123'.";
    }
}
?>
