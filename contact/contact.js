document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the "Send" button
    document.querySelector(".btn").addEventListener("click", function () {
        // Get form values
        var name = document.querySelector('.input[placeholder="Name"]').value;
        var email = document.querySelector('.input[placeholder="Email Address"]').value;
        var phone = document.querySelector('.input[placeholder="Phone"]').value;
        var subject = document.querySelector('.input[placeholder="Subject"]').value;
        var message = document.querySelector('textarea').value;

        // Validate that no field is empty
        if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || subject.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields before sending.");
            return;
        }

        // Create a mailto link with the form values
        var mailtoLink = "mailto:yashbochiwal@gmail.com" +
            "?subject=" + encodeURIComponent(subject) + " - Message from " + encodeURIComponent(name) +
            "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message);

        // Open the mail client with the mailto link
        window.location.href = mailtoLink;
    });
});
