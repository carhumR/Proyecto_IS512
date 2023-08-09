// This is a simple JavaScript function that adds a product to the cart.
function addProductToCart(productId) {
    // Get the cart element.
    var cart = document.getElementById("cart");

    // Create a new cart item element.
    var cartItem = document.createElement("li");

    // Set the cart item's product ID.
    cartItem.setAttribute("product-id", productId);

    // Set the cart item's product name.
    cartItem.innerHTML = productName;

    // Add the cart item to the cart.
    cart.appendChild(cartItem);
}

  // This is a simple JavaScript function that updates the cart total.
function updateCartTotal() {
    // Get the cart element.
    var cart = document.getElementById("cart");

    // Get the total number of items in the cart.
    var totalItems = cart.getElementsByTagName("li").length;

    // Get the total cost of the items in the cart.
    var totalCost = 0;
    for (var i = 0; i < totalItems; i++) {
        var cartItem = cart.getElementsByTagName("li")[i];
        var productId = cartItem.getAttribute("product-id");
        var productPrice = document.getElementById("product-price-" + productId).innerHTML;
        totalCost += productPrice;
    }

    // Set the cart total.
    document.getElementById("cart-total").innerHTML = totalCost;
}