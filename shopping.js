"use strict";
var cart = new Array;
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function setCart(array) {
  cart = array;
  return cart
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.random() * 100;
  console.log(`${item} has been added to your cart.`);
  var tmp = {}
  tmp[item] = Math.floor(price)
  cart.push(tmp);
  return cart
}



function removeFromCart(item) {
  var originalLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
    }  
  }
  if (cart.length == originalLength) {
    console.log('That item is not in your cart.');
    return 'That item is not in your cart.';
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  }
  cart.length = 0;
}

function viewCart() {
  var tmp = cart.slice();
  if(cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      tmp[i] = Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]];
    }
    console.log(`In your cart, you have ${tmp.join(", ")}.`);
    return cart
  } else {
    console.log("That item is not in your cart.");
  }
}
