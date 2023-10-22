let addTotal = 0;
let sum = 0;
function cardNameText(getCardName) {
    sum++;
    const li = document.createElement('li');
    li.classList.add('newClass');
    li.innerText = sum + '.' + document.getElementById(getCardName).innerText;
   const cardName= document.getElementById('cardNameShow');
   cardName.appendChild(li);
}

function inputValue(getValueId) {

    const getValue = parseFloat(document.getElementById(getValueId).innerText);

    addTotal += getValue;

    if (addTotal >= 200) {
        document.getElementById('apply').disabled = false;
        document.getElementById('coupon').disabled = false;
    }

    if (addTotal > 0) {
        document.getElementById('purchase').disabled = false;
    }

    document.getElementById('totalPrice').innerText = addTotal.toFixed(2);
    document.getElementById('total').innerText = addTotal.toFixed(2);
}

// cardOne-----------
function kcardOne() {
    cardNameText('textOne');
    inputValue('priceOne');
}

// cardTwo-------------
function kcardTwo() {
    cardNameText('textTwo')
    inputValue('priceTwo');
}

// cardThree------------
function kcardThree() {
    cardNameText('textThree')
    inputValue('priceThree'); 
}

// cardFourth-------------
function scardone() {
    cardNameText('textFour')
    inputValue('priceFour');
}

// cardFive-------------
function scardtwo() {
    cardNameText('textFive')
    inputValue('priceFive');
    
}

// cardSix-------------
function scardthree() {
    cardNameText('textSix')
    inputValue('priceSix');
    
}

function applyDiscount() {
    const couponText = document.getElementById('coupon');

    if (couponText.value == 'SELL200') {
        let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        let discount = totalPrice * (20/100);

        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = (totalPrice.toFixed(2) - discount.toFixed(2)).toFixed(2);
    }
    else {
        alert('invalid coupon code!!! . Please enter the valid coupon code.');
    }

    couponText.value = '';
}

function back() {
    const deleteButtons = document.querySelectorAll('.newClass');
    for (const deleteButton of deleteButtons) {
        deleteButton.remove();
    }

    document.getElementById('totalPrice').innerText = '00.00';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('total').innerText = '00.00';
    addTotal = 0;
    sum = 0;

    if (sum <= 0) {
        document.getElementById('purchase').disabled = true;
        document.getElementById('applyDiscount').disabled = true;
        document.getElementById('coupon').disabled = true;
    }

}


