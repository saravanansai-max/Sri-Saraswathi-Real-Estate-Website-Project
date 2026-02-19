// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function(){
    document.getElementById("navLinks").classList.toggle("show");
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Thank you! We will contact you soon.");
    this.reset();
});