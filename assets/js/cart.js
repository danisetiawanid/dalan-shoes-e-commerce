let carts = document.querySelectorAll('#addtocartdan');

let product = [
    {
        name: 'Superstar Shoes',
        tag: '1',
        price: 2000000,
        inCart: 0
    },
    {
        name: 'Dame 6 Geek Up Shoes',
        tag: '2',
        price: 900000,
        inCart: 0
    },
    {
        name: 'Ultraboost Shoes',
        tag: '3',
        price: 1200000,
        inCart: 0
    },
    {
        name: 'Genko Shoes',
        tag: '4',
        price: 800000,
        inCart: 0
    },

]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cardNumber(product[i]);
        totalCost(product[i]);
        alert("The product succesfull added, Please check your cart :) ");
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementById('logocartnambah').textContent = productNumbers;
    }
}

function cardNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);


    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementById('logocartnambah').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.getElementById('logocartnambah').textContent = 1;
    }

    setItem(product)
}

function setItem(product) {
    let cartItems = localStorage.getItem("productsInCarts");
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCarts", JSON.stringify(cartItems));

}

function totalCost(product) {
    // console.log("the product price is", product.price)
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cart cost is", cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}






function displayCart() {
    let cartItems = localStorage.getItem('productsInCarts');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.tbodydani');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `  <tr>
            <td class="product-remove text-left"><a href=""><i
                        class="la la-remove"></i></a></td>
            <td class="product-thumbnail text-left">
                <img src="assets/img/products/men/${item.tag}.png"
                    alt="Product Thumnail" width="70" height="88">
            </td>
            <td class="product-name text-left wide-column">
                <h3>
                    <a href="product-details.html">${item.name}.</a>
                </h3>
            </td>
            <td class="product-price">
                <span class="product-price-wrapper">
                    <span class="money">Rp. ${item.price}</span>
                </span>
            </td>
            <td class="product-quantity">
                <div class="quantity">
                    <input type="number" class="quantity-input" name="qty"
                        id="qty-1" value="${item.inCart}" min="1">
                </div>
            </td>
            <td class="product-total-price">
                <span class="product-price-wrapper">
                    <span class="money">Rp. ${item.price * item.inCart}</span>
                </span>
            </td>
        </tr>`
        });
    }

}

function displayHasil() {
    let cartItems = localStorage.getItem("productsInCarts");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.cart-collaterals');
    let cartCost = localStorage.getItem('totalCost');


    console.log(cartCost)

    productContainer.innerHTML += `<div class="cart-totals">
    <h5 class="font-size-14 font-bold mb--15">Cart totals</h5>
    <div class="cart-calculator">
        <div class="cart-calculator__item order-total">
            <div class="cart-calculator__item--head">
                <span>Total</span>
            </div>
            <div class="cart-calculator__item--value">
                <span class="product-price-wrapper">
                    <span class="money">Rp. ${cartCost}</span>
                </span>
            </div>
        </div>
    </div>
</div>
<a href="checkout.html" class="btn btn-size-md btn-shape-square btn-fullwidth">
    Proceed To Checkout
</a>`

}

function removeProductSemua() {

    var fname = $("#billing_fname").val();
    var lname = $("#billing_lname").val();
    var stadd = $("#billing_streetAddress").val();
    var city = $("#billing_city").val();
    var state = $("#billing_state").val();
    var number = $("#billing_number").val();
    var email = $("#billing_email").val();

    if (fname == '' || lname == '' || stadd == '' || city == '' || state == '' || number == '' || email == '') {
        alert('Please fill all form');
        return false;
    }
    else {
        let removeDani = localStorage.clear();
        alert("Thanks for ordering the shoes may be useful :) ");
        window.open("index.html")
        return removeDani;
    }
}


onLoadCartNumbers();
displayCart();
displayHasil();