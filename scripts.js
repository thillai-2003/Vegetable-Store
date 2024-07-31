const vegetables = [
    { name: 'Tomato', price: '$2.00', uses: 'Salads, sauces, soups', image: 'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg' },
    { name: 'Carrot', price: '$1.50', uses: 'Stews, salads, juices', image: 'https://s3-us-west-1.amazonaws.com/www.soupersage.com/img/food/carrots_2.jpg' },
    { name: 'Spinach', price: '$3.00', uses: 'Smoothies, salads, sautés', image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270609/spinach.jpg?w=1155' },
    { name: 'Potato', price: '$1.20', uses: 'Fries, mashed potatoes, stews', image: 'https://wallpaperaccess.com/full/1986380.jpg' },
    { name: 'Cucumber', price: '$1.80', uses: 'Salads, sandwiches, pickles', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/07/shutterstock_641322889.jpg?w=1200' },
    { name: 'Bell Pepper', price: '$2.50', uses: 'Stir-fries, salads, grilling', image: 'https://www.naturefresh.ca/wp-content/uploads/types-of-bell-peppers-guide-hero-image.jpg' },
    { name: 'Broccoli', price: '$2.75', uses: 'Steamed, stir-fries, soups', image: 'https://images6.alphacoders.com/658/658529.jpg' },
    { name: 'Onion', price: '$1.90', uses: 'Grilling, baking, sautés', image: 'https://cdn.britannica.com/48/82548-050-A61BF320.jpg' },
    { name: 'Cauliflower', price: '$2.40', uses: 'Roasting, soups, salads', image: 'https://media.fooducate.com/comments/images/59411502-5DF2-04E6-4B00-932FCD322081-71993-cauliflower.jpeg' },
    { name: 'Beetroot', price: '$2.20', uses: 'Juices, salads, fries', image: 'https://theconservationfoundation.org/wp-content/uploads/2019/02/beets.jpg' }
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayVegetables(vegetablesList, filteredVegetables = vegetables) {
    vegetablesList.innerHTML = '';
    filteredVegetables.forEach(veggie => {
        const veggieItem = document.createElement('div');
        veggieItem.className = 'vegetable-item';
        veggieItem.innerHTML = `
            <img src="${veggie.image}" alt="${veggie.name}">
            <h3>${veggie.name}</h3>
            <p>Price: ${veggie.price}</p>
            <p>Uses: ${veggie.uses}</p>
            <button class="cart-btn" onclick="addToCart('${veggie.name}')">Add to Cart</button>
        `;
        vegetablesList.appendChild(veggieItem);
    });
}

function addToCart(name) {
    const veggie = vegetables.find(v => v.name === name);
    if (veggie) {
        cart.push(veggie);
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('cart-message').innerText = `${veggie.name} has been added to your cart!`;
        setTimeout(() => {
            document.getElementById('cart-message').innerText = '';
        }, 2000);
        alert(`${veggie.name} has been added to your cart!`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const vegetablesList = document.getElementById('vegetables-list');
    displayVegetables(vegetablesList);

    document.getElementById('search-bar').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.toLowerCase();
            const filteredVegetables = vegetables.filter(veggie => veggie.name.toLowerCase().includes(query));
            displayVegetables(vegetablesList, filteredVegetables);
        }
    });
});

