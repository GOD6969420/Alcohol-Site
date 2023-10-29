document.addEventListener('DOMContentLoaded', function () {
    // Get the container for displaying the order summary
    const orderSummaryContainer = document.getElementById('order-summary');

    // Fetch the order data from order.json
    fetch('../Cart/order.json')
        .then(response => response.json())
        .then(orderData => {
            // Generate and display the order summary
            const orderSummary = generateOrderSummary(orderData);
            orderSummaryContainer.innerHTML = orderSummary;
        })
        .catch(error => {
            console.error('Failed to fetch order data:', error);
            orderSummaryContainer.innerHTML = 'Error loading order data.';
        });

    // Function to generate the order summary HTML
 // Function to generate the order summary HTML
function generateOrderSummary(orderData) {
    // Initialize variables for calculating totals
    let subtotal = 0;
    let totalCost = 0;

    // Create an HTML string to display order details
    let orderSummaryHTML = '<h2>Order Details</h2>';

    // Loop through the order items and calculate totals
    for (const key in orderData) {
        if (key === 'subtotal' || key === 'total_price') {
            if (key === 'subtotal') {
                subtotal = orderData[key];
            } else if (key === 'total_price') {
                totalCost = orderData[key];
            }
        } else {
            // Display individual order items with prices
            const item = orderData[key];
            orderSummaryHTML += `
                <p id="prod">${item.name} x ${item.quantity} ---------------------------------- ${item.subtotal.toFixed(2)}</p>
            `;
        }
    }

    // Calculate shipping cost (assuming $10) and taxes (18% of the subtotal)
    const shippingCost = 10; // Replace with your shipping cost
    const taxRate = 0.18;   // 18% tax rate
    const taxes = subtotal * taxRate;

    // Add subtotal, shipping, taxes, and total to the order summary
    orderSummaryHTML += `
        <h2>Summary</h2>
        <p id="prod"><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p id="prod"><strong>Shipping Cost:</strong> ${shippingCost.toFixed(2)}</p>
        <p id="prod"><strong>Taxes (18%):</strong> ${taxes.toFixed(2)}</p>
        <p id="prod"><strong>Total:</strong> ${totalCost.toFixed(2)}</p>
    `;

    return orderSummaryHTML;
}

function hideElementsAfterTimer() {
    // Get the elements you want to hide
    const deliveryInfo = document.querySelector('#delivery-info');
    
    // Hide the elements
    deliveryInfo.style.display = 'none';
}

// Set a timeout for 1 minute (60,000 milliseconds)
setTimeout(hideElementsAfterTimer, 60000);

// Hide the "cash-info" element after 1 minute
setTimeout(function () {
    document.getElementById('cash-info').style.display = 'none';
}, 60000); // 60000 milliseconds = 1 minute


// Function to start the countdown timer
function startCountdown(durationInSeconds) {
    const timerElement = document.getElementById('timer');
    let duration = durationInSeconds;

    function updateTimer() {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (duration <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = '0:00';
            // Display a message when the timer reaches zero
            timerElement.textContent = 'Your order is delivered!';
        } else {
            duration--;
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Start the timer for 1 minute (60 seconds)
startCountdown(60);

});
