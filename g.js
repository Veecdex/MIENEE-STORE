document.addEventListener("DOMContentLoaded", function () {

    function navigateToPage(page) {
 
        window.location.href = page;
    }


    document.getElementById("aboutLink").addEventListener("click", function () {
        navigateToPage("about.html");
    });
    document.getElementById("homeLink").addEventListener("click", function () {
        navigateToPage("index.html");
    });
    document.getElementById("contactLink").addEventListener("click", function () {
        navigateToPage("contact.html");
    });

    document.getElementById("servicesLink").addEventListener("click", function () {
        navigateToPage("services.html");
    });
});




