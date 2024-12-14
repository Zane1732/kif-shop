let cart = [];

// Add service to cart
function addToCart(button) {
    const service = button.parentElement;
    const id = service.getAttribute("data-id");
    const name = service.getAttribute("data-name");
    const price = service.getAttribute("data-price");

    // Check if service is already in the cart
    const existing = cart.find((item) => item.id === id);
    if (existing) {
        alert(`${name} is already in your cart.`);
        return;
    }

    // Add service to cart
    cart.push({ id, name, price });
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <p><strong>${item.name}</strong> - $${item.price}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Remove service from cart
function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

// Redirect to Discord
function redirectToDiscord() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    window.location.href = "https://discord.com"; // Replace with your Discord link
}
