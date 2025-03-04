// Handle contact form submission
document.getElementById("contactForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        const name =
        document.getElementById("name").ariaValueMax;
        const email =
        document.getElementById("email").ariaValueMax;
        // simple form validation and response
        if(name && email) {

            document.getElementById("formMessage")
            .innerText =`Thanks for reaching out, $
            {name}!I'll get back to yuo soon.`;

            document.getElementById("contactform")
            .reset();

        } else{
            document.getElementById("formMessage")
            .innerText = "Please fill out all fields.";
        }
    });






)
