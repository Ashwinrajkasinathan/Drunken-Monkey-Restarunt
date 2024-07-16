document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountButton = document.getElementById('cart-count');
    let totalPrice = 0;
    let itemCount = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Add product to cart list
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = productName;
            
            const priceBadge = document.createElement('span');
            priceBadge.className = 'badge badge-primary badge-pill';
            priceBadge.textContent = `$${productPrice}`;
            listItem.appendChild(priceBadge);

            const removeButton = document.createElement('button');
            removeButton.className = 'btn btn-danger btn-sm ml-3';
            removeButton.textContent = 'Remove';
            listItem.appendChild(removeButton);

            cartItems.appendChild(listItem);

            // Update total price
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            // Update item count
            itemCount++;
            cartCountButton.textContent = itemCount;

            // Remove item from cart
            removeButton.addEventListener('click', () => {
                cartItems.removeChild(listItem);

                // Update total price
                totalPrice -= productPrice;
                totalPriceElement.textContent = totalPrice.toFixed(2);

                // Update item count
                itemCount--;
                cartCountButton.textContent = itemCount;
            });
        });
    });
});


function validateUsername() {
    const username = document.getElementById('username').value;
    const errorElement = document.getElementById('username-error');
    if (username === '') {
        errorElement.textContent = 'Name is required';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        errorElement.textContent = 'Email is required';
        return false;
    } else if (!emailPattern.test(email)) {
        errorElement.textContent = 'Invalid email format';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('password-error');
    if (password === '') {
        errorElement.textContent = 'Password is required';
        return false;
    } else if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateTextarea() {
    const textarea = document.getElementById('textarea').value;
    const errorElement = document.getElementById('textarea-error');
    if (textarea === '') {
        errorElement.textContent = 'Message is required';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateForm() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isTextareaValid = validateTextarea();

    return isUsernameValid && isEmailValid && isPasswordValid && isTextareaValid;
}