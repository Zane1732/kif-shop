let cart = [];

// Video play button functionality
function playVideo() {
    const iframe = document.getElementById("background-video");
    const playBtn = document.getElementById("play-btn");

    // Toggle video play and hide the play button
    if (iframe.src.includes("autoplay=0")) {
        iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
        playBtn.style.display = "none";
    }
}

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
    window.location.href = "https://discord.gg/bmERaxE27s"; // Replace with your Discord link
}
