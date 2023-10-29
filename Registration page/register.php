<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
    $age = $_POST["age"];
    $phone = $_POST["phone"];

    // Read existing user data from JSON file (create the file if it doesn't exist)
    $userData = file_exists('users.json') ? json_decode(file_get_contents('users.json'), true) : [];

    // Check if the email already exists
    foreach ($userData as $user) {
        if ($user['email'] === $email) {
            echo "Email already exists.";
            return;
        }
    }

    // Generate a unique user ID (you can use a more robust method)
    $userId = uniqid();

    // Add new user data
    $newUser = [
        'id' => $userId,
        'name' => $name,
        'email' => $email,
        'password' => $password,
        'age' => $age,
        'phone' => $phone,
    ];
    $userData[] = $newUser;

    // Save updated user data to JSON file
    if (file_put_contents('users.json', json_encode($userData, JSON_PRETTY_PRINT)) !== false) {
        // Redirect to the login page after successful registration
        header("Location:..\Login Page\login.html");
        exit; // Make sure to exit after redirection
    } else {
        echo "Error saving user data.";
    }
}
?>
