document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const tableBody = document.querySelector('table');
    const totalCost = document.querySelector('#total-cost');
    const shippingCost = 50; // You can set the shipping cost as needed
    const taxRate = 0.18;   // Tax rate (18%)

    // Function to update the total cost
    function updateTotalCost() {
        let subtotal = 0;
        cart.forEach((cartItem) => {
            subtotal += cartItem.price * cartItem.quantity;
        })
    
        // Define shipping cost and tax rate
        const shippingCost = 10.00;
        const taxRate = 0.18;
    
        // Calculate shipping cost
        const shippingCostElement = document.getElementById('shipping-cost');
        shippingCostElement.textContent = shippingCost.toFixed(2);
    
        // Calculate taxes
        const taxes = subtotal * taxRate;
        const taxesElement = document.getElementById('taxes');
        taxesElement.textContent = taxes.toFixed(2);
    
        // Calculate total cost
        const totalCost = subtotal + shippingCost + taxes;
        const totalCostElement = document.getElementById('total-cost');
        totalCostElement.textContent = totalCost.toFixed(2);
    
        // Display the subtotal
        const subtotalElement = document.getElementById('subtotal');
        subtotalElement.textContent = subtotal.toFixed(2);
        
    }   

    // Function to remove an item from the cart
    function removeItem(index) {
        if (index >= 0 && index < cart.length) {
            const removedItem = cart.splice(index, 1)[0];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateTotalCost();

            if (cart.length === 0) {
                // If the cart is empty, remove all rows
                while (tableBody.rows.length > 1) {
                    tableBody.deleteRow(1);
                }
            } else {
                // Remove the row corresponding to the removed item
                tableBody.deleteRow(index + 1);
            }
        }
    }

    // Loop through the cart items and display them in the table
    cart.forEach((cartItem, index) => {
        const row = tableBody.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = cartItem.image;
        imageElement.alt = cartItem.name;
        imageElement.style.width = '50px'; // Set the desired width
        imageElement.style.height = 'auto'; // Maintain aspect ratio

        // Fill table cells with item data
        cell1.appendChild(imageElement);
        cell2.textContent = cartItem.name;
        cell3.textContent = cartItem.price;
        cell4.textContent = cartItem.quantity;
        cell5.textContent = (cartItem.price * cartItem.quantity).toFixed(2);

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove the item from the cart
            removeItem(index);
        });
        cell6.appendChild(removeButton);
    });

    // Initialize the total cost
    updateTotalCost();
    const placeOrderButton = document.getElementById('place-order-button');

    // Event listener for the "Place Order" button
    placeOrderButton.addEventListener('click', () => {
        // Convert the cart items to JSON
        const orderData = JSON.stringify(cart, null, 2);

        // Create a new XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // Set up the request
        xhr.open('POST', 'place_order.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // Send the order data to the server
        xhr.send(orderData);

        // Listen for the response from the server
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                // Optionally, you can clear the cart after a successful order
                localStorage.removeItem('cart');
                // Update the UI or show a success message to the user
                // Collapse the table
                tableBody.style.display = 'none';
                // Redirect to the order.html page
                window.location.href = '../Order/order.html';
            } else {
                console.error('Failed to place the order:', xhr.status, xhr.statusText);
                // Handle error scenarios
            }
        };
    });
});

