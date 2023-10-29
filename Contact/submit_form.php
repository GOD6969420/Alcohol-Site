<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Create an array to store the form data
    $formData = array(
        "name" => $name,
        "email" => $email,
        "message" => $message
    );

    // Specify the file path
    $jsonFile = "contact_data.json";

    // Read existing JSON data from the file (if it exists)
    $data = [];
    if (file_exists($jsonFile)) {
        $jsonContent = file_get_contents($jsonFile);
        $data = json_decode($jsonContent, true);
    }

    // Add the new form data to the existing data
    $data[] = $formData;

    // Encode the updated data as JSON and write it back to the file
    if (file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT)) !== false) {
        // Respond with a success message
        echo "Form data saved successfully!";
    } else {
        echo "Error saving form data.";
    }
} else {
    echo "Invalid request!";
}
?>
