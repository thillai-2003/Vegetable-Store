document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDisplay = document.getElementById('cart-display');
    cartDisplay.innerHTML = '';

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: ${item.price}</p>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartDisplay.appendChild(cartItem);
        });
    }
});

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Reload the page to update the cart display
}
