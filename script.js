function startGame() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Check if the user with this phone number has played before
    if (getCookie(phoneNumber)) {
        alert('You have already played!');
    } else {
        // Set a cookie for this user
        setCookie(phoneNumber, 'played', 30); // The number '30' signifies the cookie will expire in 30 days

        // Make the cards visible
        const cards = document.querySelectorAll('.card-container');
        cards.forEach(card => {
            card.style.display = 'block';
        });
    }
}

function revealDiscount(cardId) {
    const card = document.getElementById(cardId).querySelector('.card');
    card.style.transform = "rotateY(180deg)";
    
    // Insert the random discount and code into the card
    const discount = getRandomDiscount();
    const code = getRandomCode();
    card.querySelector('.card-back-content').innerHTML = `<div>Congratulations! You won</div><div>${discount}</div><div>Discount Code: ${code}</div><div>Phone number: ${phoneNumber.value}</div><br><div>Screenshot this to redeem the voucher! :)</div>`;
    
    // Disable further interactions for all cards
    document.getElementById("card1").onclick = null;
    document.getElementById("card2").onclick = null;
    document.getElementById("card3").onclick = null;
}

// Function to generate a random discount
function getRandomDiscount() {
    const discounts = ['10% off', '20% off', '50% off'];
    const randomIndex = Math.floor(Math.random() * discounts.length);
    return discounts[randomIndex];
}

// Function to generate a random discount code
function getRandomCode() {
    const randomNum = Math.floor(Math.random() * 100000);
    return `EYEC${String(randomNum).padStart(5, '0')}`;  // Pads with zeros to ensure 5 digits
}

// Remove the DOMContentLoaded event listener, as we won't need it in this version of the code.
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function gameEnd() {
    // Disable the input and button
    document.getElementById('phoneNumber').setAttribute('disabled', true);
    document.querySelector('button').setAttribute('disabled', true);

    // ... any other logic you want to execute when the game ends
}

