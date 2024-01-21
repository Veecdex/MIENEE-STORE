document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTop");
  
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    scrollToTopButton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  
  
      function sendFormData() {
        // Get the email input value
        var email = document.getElementById("emailInput").value;
  
        // Construct the message
        var message = "New subscription:\nEmail: " + email;
  
        // Replace the phone number with the actual number you want to send the message to
        var phoneNumber = "+2349022430387";
  
        // Construct the URL for sending a WhatsApp message (you can replace with your preferred method)
        var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  
        // Open the WhatsApp URL in a new tab
        window.open(whatsappURL, "_blank");
  
        // Prevent the form from submitting (optional)
        return false;
      }
   
  
   
  
    // Initialize cart count
    let cartCount = 0;
  
    // Function to update cart count in the navbar
    function updateCartCount() {
      // Update the cart number in the navbar
      const navbarCartCount = document.getElementById("navbarCartCount");
      if (navbarCartCount) {
        navbarCartCount.textContent = cartCount;
      }
    }
  
    // Event listener for the cart icon click
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("cart-icon")) {
        // Increment cart count
        cartCount++;
  
        // Update cart count in the navbar
        updateCartCount();
      }
    });
  
  
  
  let cartCount = 0;
  
  function addToCart(element) {
      const productContainer = element.closest('.product-container');
      
      // Get the data dynamically
      const containerImage = productContainer.querySelector('.product-image').src;
      const selectedSize = productContainer.querySelector('.size-dropdown').value;
      const selectedPrice = parseFloat(productContainer.querySelector('.product-price').textContent.trim().split(": ")[1]);
  
      // Assuming you have a cart data structure, you can push the item to it
      const cartItem = {
          image: containerImage,
          size: selectedSize,
          price: selectedPrice,
          quantity: 1 // You can add a quantity dropdown in the cart.html page
      };
  
      // Add the item to the cart data structure or perform other desired actions
      // For now, let's just increment the cart count
      cartCount++;
      updateCartCount();
  }
  
  function updateCartCount() {
      // Update the cart number in the navbar
      const navbarCartCount = document.getElementById("navbarCartCount");
      if (navbarCartCount) {
          navbarCartCount.textContent = cartCount;
      }
  }
  
  // Event listener for the cart icon click
  document.addEventListener("click", function (event) {
      if (event.target.classList.contains("cart-icon")) {
          addToCart(event.target);
      }
  });
  