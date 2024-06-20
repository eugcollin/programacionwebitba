document.addEventListener('DOMContentLoaded', function() {
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    var textFields = document.querySelectorAll('input[type="text"]'); 
    
    textFields.forEach(function(textField) {
        textField.addEventListener('input', function() {
            var value = this.value;
            var correctValue = value.replace(/\s+/g, ' '); 
            this.value = correctValue;
        });
    });


    document.getElementById('contactform').addEventListener('submit', function(e) {
        e.preventDefault();
        message();
    });

    function message() {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var msg = document.getElementById('message');

        if (name.value === '' || email.value === '' || subject.value === '' || msg.value === '') {
            danger.style.display = 'block';
            success.style.display = 'none';
        }
        else {
            success.style.display = 'block';
            danger.style.display = 'none';

            // Create an object to store the formdata
            var formData = {
                name: name.value,
                email: email.value,
                message: msg.value
            };
            
            setTimeout(() => {
                name.value = '';
                email.value = '';
                subject.value = '';
                msg.value = '';
            }, 2000);
        }
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

});

// Code for shopping cart
const PRODUCT = [
    {
        id: 0,
        image: 'photos/lessonontheground.jpg',
        title: 'Beginner lesson',
        price: 30,
    },
    {
        id: 1,
        image: 'photos/intermediatesurf.png',
        title: 'Intermediate lesson',
        price: 30,
    },
    {
        id: 2,
        image: 'photos/advancedsurf.jpg',
        title: 'Advanced lesson',
        price: 30,
    },
    {
        id: 3,
        image: 'photos/twowalking.jpg',
        title: 'Private lesson',
        price: 50,
    },
    {
        id: 4,
        image: 'photos/walkingonthebeach.jpg',
        title: '7 Day Surf Camp',
        price: 200,
    },
    {
        id: 5,
        image: 'photos/surfboards.jpg',
        title: 'Equipment rental',
        price: 15,
    }
];

const CATEGORIES = [...new Set(PRODUCT.map((item) => { return item }))];
let i = 0;
document.getElementById('root').innerHTML = CATEGORIES.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <h3>${title}</h3>
                <h2>$ ${price}.00</h2>
                <button class='addToCart'onclick='addToCart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

let cart = [];

function addToCart(a) {
    if (cart[CATEGORIES[a].id]) {
        cart[CATEGORIES[a].id].quantity += 1;
    } else {
        cart[CATEGORIES[a].id] = { ...CATEGORIES[a], quantity: 1 };
    }
    displayCart();
}

function changeQuantity(id, quantity) {
    if (cart[id]) {
        cart[id].quantity += quantity;
        if (cart[id].quantity <= 0) {
            delete cart[id];
        }
    }
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart() {
    let totalItems = 0, totalPrice = 0;
    let cartItems = Object.values(cart);
    totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("count").innerHTML = totalItems;
    if (cartItems.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cartItems.map((item, index) => {
            var { id, image, title, price, quantity } = item;
            totalItems += quantity;
            totalPrice += price * quantity;
            document.getElementById("total").innerHTML = "$ " + totalPrice + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <div class='item-info'>
                    <p>${title}</p>
                    <p id='price'>$ ${price}.00</p>
                </div>
                <div class='quantity-control'>
                <button class='quantity-button' onclick='changeQuantity(${id}, 1)'>+</button>
                <p>${quantity}</p>
                <button class='quantity-button' onclick='changeQuantity(${id}, -1)'>-</button>
            </div>
                <i class="fa-solid fa-trash" onclick='delElement(${id})'></i>
            </div>`
            );
        }).join('');
        updatePaymentButton(true);
    }
    if (totalItems === 0) {
        updatePaymentButton(false);
    }
}
function updatePaymentButton(enable) {
    const paymentButton = document.getElementById('payment-button');
    if (enable) {
        paymentButton.removeAttribute('disabled');
        paymentButton.classList.add('enabled');
    } else {
        paymentButton.setAttribute('disabled', 'true');
        paymentButton.classList.remove('enabled');
    }
}





