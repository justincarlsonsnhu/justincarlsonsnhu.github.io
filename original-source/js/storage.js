'use strict';

// The key we use to store our shopping cart details in HTML local storage
const ShoppingCartStorageKey = "shoppingcart";

// Sets the shopping cart string in local storage
// Argument: 'cartValue': The string value representing a comma-separated list of productIds in the cart
function setShoppingCartInStorage(cartValue) {  
  localStorage.setItem(ShoppingCartStorageKey, cartValue);
}

// Loads the shopping cart string from local storage
// Returns: A comma-separated list of productIds in the cart
function getShoppingCartFromStorage() {
  return localStorage.getItem(ShoppingCartStorageKey);
}