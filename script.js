$(document).ready(function() {
    // Function to update price based on selected size
    function updatePrice(element) {
        var selectedSize = $(element).val();
        var containerId = $(element).data('container');
        var price;

        // Adjust prices based on your requirements for each container
        if (containerId === "container1") {
            if (selectedSize === "small") {
                price = "$19.99";
            } else if (selectedSize === "medium") {
                price = "$24.99";
            } else if (selectedSize === "large") {
                price = "$29.99";
            }
        } else if (containerId === "container2") {
            if (selectedSize === "small") {
                price = "$20.99";
            } else if (selectedSize === "medium") {
                price = "$30.99";
            } else if (selectedSize === "large") {
                price = "$40.99";
            }
        } else if (containerId === "container3") {
            // Adjust prices for container3
        }else if (containerId === "container4") {
            // Adjust prices for container3
        }else if (containerId === "container5") {
            // Adjust prices for container3
        }else if (containerId === "container6") {
            // Adjust prices for container3
        }else if (containerId === "container7") {
            // Adjust prices for container3
        }else if (containerId === "container8") {
            // Adjust prices for container3
        }else if (containerId === "container9") {
            // Adjust prices for container3
        }else if (containerId === "container10") {
            // Adjust prices for container3
        }else if (containerId === "container11") {
            // Adjust prices for container3
        }else if (containerId === "container12") {
            // Adjust prices for container3
        }else if (containerId === "container13") {
            // Adjust prices for container3
        }else if (containerId === "container14") {
            // Adjust prices for container3
        }else if (containerId === "container15") {
            // Adjust prices for container3
        }else if (containerId === "container16") {
            // Adjust prices for container3
        }else if (containerId === "container17") {
            // Adjust prices for container3
        }else if (containerId === "container18") {
            // Adjust prices for container3
        }else if (containerId === "container19") {
            // Adjust prices for container3
        }else if (containerId === "container20") {
            // Adjust prices for container3
        }else if (containerId === "container21") {
            // Adjust prices for container3
        }else if (containerId === "container22") {
            // Adjust prices for container3
        }else if (containerId === "container23") {
            // Adjust prices for container3
        }else if (containerId === "container24") {
            // Adjust prices for container3
        }else if (containerId === "container25") {
            // Adjust prices for container3
        }else if (containerId === "container26") {
            // Adjust prices for container3
        }else if (containerId === "container27") {
            // Adjust prices for container3
        }else if (containerId === "container28") {
            // Adjust prices for container3
        }else if (containerId === "container29") {
            // Adjust prices for container3
        }else if (containerId === "container30") {
            // Adjust prices for container3
        }

        // Update the corresponding product price for the current container
        $(element).closest('.inner-container').find('.product-price').text("Price: " + price);
    }

    // Event listener for size dropdown change
    $(".size-dropdown").change(function() {
        updatePrice(this);
    });
});
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
