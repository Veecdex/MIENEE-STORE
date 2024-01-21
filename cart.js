// Retrieve the cart items from localStorage
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Display the cart items
var cartContainer = document.getElementById('cartItems');

if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
    cartItems.forEach(function(item, index) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('product-container');
        itemElement.innerHTML = `
            <span class="close-icon" onclick="removeItem(${index})">&times;</span>
            <img class="product-image" src="${item.imageUrl}" alt="Product Image">
            <div class="product-details">
                <p>${item.name}</p>
                <p class="product-price">Price: $<span class="price" data-index="${index}">${(item.price * (item.quantity || 1)).toFixed(2)}</span></p>
            </div>
            <div class="quantity-container">
                <div class="quantity-buttons">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="quantity-display">${item.quantity || 1}</div>
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Function to update quantity
function updateQuantity(index, quantityChange) {
    var updatedCart = [...cartItems]; // Create a shallow copy of the cart array
    updatedCart[index] = {
        ...updatedCart[index], // Create a shallow copy of the specific product object
        quantity: (updatedCart[index].quantity || 1) + quantityChange
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartDisplay(); // Update the cart display directly
}

// Function to remove item
function removeItem(index) {
    var updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartDisplay(); // Update the cart display directly
}

// Function to update quantity
function updateQuantity(index, quantityChange) {
    var updatedCart = [...cartItems]; // Create a shallow copy of the cart array
    updatedCart[index] = {
        ...updatedCart[index], // Create a shallow copy of the specific product object
        quantity: (updatedCart[index].quantity || 1) + quantityChange
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Instead of calling location.reload(), call updateCartDisplay directly
    updateCartDisplay(updatedCart);
}

// Function to remove item
function removeItem(index) {
    var updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Instead of calling location.reload(), call updateCartDisplay directly
    updateCartDisplay(updatedCart);
}

// Function to update the display of cart items in the cart.html page
// Function to update quantity
function updateQuantity(index, quantityChange) {
    var updatedCart = [...cartItems]; // Create a shallow copy of the cart array
    updatedCart[index] = {
        ...updatedCart[index], // Create a shallow copy of the specific product object
        quantity: (updatedCart[index].quantity || 1) + quantityChange
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Use a small delay before calling updateCartDisplay
    setTimeout(function () {
        updateCartDisplay(updatedCart);
    }, 100);
}

// Function to remove item
function removeItem(index) {
    var updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Use a small delay before calling updateCartDisplay
    setTimeout(function () {
        updateCartDisplay(updatedCart);
    }, 100);
}

// Function to update the display of cart items in the cart.html page
// Function to update quantity
function updateQuantity(index, quantityChange) {
    var updatedCart = [...cartItems]; // Create a shallow copy of the cart array
    updatedCart[index] = {
        ...updatedCart[index], // Create a shallow copy of the specific product object
        quantity: (updatedCart[index].quantity || 1) + quantityChange
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Function to remove item
function removeItem(index) {
    var updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Listen for changes in localStorage
window.addEventListener('storage', function (event) {
    if (event.key === 'cart') {
        updateCartDisplay();
    }
});

// Function to update quantity
function updateQuantity(index, quantityChange) {
    var updatedCart = [...cartItems]; // Create a shallow copy of the cart array
    updatedCart[index] = {
        ...updatedCart[index], // Create a shallow copy of the specific product object
        quantity: (updatedCart[index].quantity || 1) + quantityChange
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Immediately update the display after changing the cart
    updateCartDisplay();
}

// Function to remove item
function removeItem(index) {
    var updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Immediately update the display after changing the cart
    updateCartDisplay();
}

// Function to update the display of cart items in the cart.html page
// Function to update the display of cart items in the cart.html page
// Function to update the display of cart items in the cart.html page
function updateCartDisplay() {
    // Retrieve the cart items from localStorage
    cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    var cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ""; // Clear previous contents

    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(function(item, index) {
            var itemElement = document.createElement('div');
            itemElement.classList.add('product-container');
            itemElement.innerHTML = `
                <span class="close-icon" onclick="removeItem(${index})">&times;</span>
                <img class="product-image" src="${item.imageUrl}" alt="Product Image">
                <div class="product-details">
                    <p>${item.name}</p>
                    <p class="product-price">Price: $<span class="price" data-index="${index}">${(item.price * (item.quantity || 1)).toFixed(2)}</span></p>
                </div>
                <div class="quantity-container">
                    <div class="quantity-buttons">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="quantity-display">${item.quantity || 1}</div>
                </div>
            `;
            cartItemsDiv.appendChild(itemElement);
        });
    }

    // Update the summary container
    updateSummaryContainer();
}

// Function to update the summary container
function updateSummaryContainer() {
    var summaryContainer = document.getElementById("summaryContainer");
    var totalPrice = 0;
    var totalQuantity = 0;

    cartItems.forEach(function(item) {
        totalPrice += item.price * (item.quantity || 1);
        totalQuantity += item.quantity || 1;
    });

    summaryContainer.innerHTML = `
        <h2>Summary</h2>
        <div id="totalPrice">Total Price: $${totalPrice.toFixed(2)}</div>
        <div id="totalQuantity">Total Quantity: ${totalQuantity}</div>
    `;
}

// Initial display
updateCartDisplay();

// Now, the rest of your code
