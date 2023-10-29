<?php
// Retrieve the JSON data from the request
$orderData = file_get_contents("php://input");

if ($orderData !== false) {
    // Decode the received JSON data
    $order = json_decode($orderData, true);

    if (is_array($order)) {
        // Calculate the subtotal for each item and accumulate the total subtotal
        $subtotal = 0;
        foreach ($order as &$item) {
            // Calculate the subtotal for each item
            $itemSubtotal = $item['price'] * $item['quantity'];

            // Remove the 'image' field
            unset($item['image']);

            // Add the calculated subtotal to the item
            $item['subtotal'] = $itemSubtotal;

            // Accumulate the subtotal for the entire order
            $subtotal += $itemSubtotal;
        }

        // Add shipping cost and taxes to the total
        $shippingCost = 10; // Example shipping cost
        $taxRate = 0.18;    // 18% tax rate

        $totalPrice = $subtotal + $shippingCost + ($subtotal * $taxRate);

        // Add the subtotal and total price to the order data
        $order['subtotal'] = $subtotal;
        $order['total_price'] = $totalPrice;

        // Encode the modified order data back to JSON
        $orderData = json_encode($order);

        // Save the order data to order.json (overwrite if it already exists)
        $result = file_put_contents("order.json", $orderData);

        if ($result !== false) {
            echo "Order placed successfully!";
        } else {
            http_response_code(500); // Internal Server Error
            echo "Failed to save the order.";
        }
    } else {
        http_response_code(400); // Bad Request
        echo "Invalid order data received.";
    }
} else {
    http_response_code(400); // Bad Request
    echo "Invalid order data received.";
}
?>
