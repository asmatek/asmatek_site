document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contactForm");
    const successMessage = document.querySelector("#success");
    const sendMessageButton = document.querySelector("#sendMessageButton");

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.querySelector("input#name").value.trim();
        const email = document.querySelector("input#email").value.trim();
        const phone = document.querySelector("input#phone").value.trim();
        const message = document.querySelector("textarea#message").value.trim();

        // Validation
        if (!name || !email || !message) {
            displayAlert("Please fill in all required fields.", "danger");
            return;
        }

        // Disable the button to prevent duplicate submissions
        sendMessageButton.disabled = true;

        try {
            const response = await fetch("https://formspree.io/f/mwppdzrn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, message }),
            });

            if (response.ok) {
                displayAlert("Your message has been sent successfully!", "success");
                contactForm.reset();
            } else {
                displayAlert("Oops! Something went wrong. Please try again later.", "danger");
            }
        } catch (error) {
            displayAlert("Network error. Please check your connection.", "danger");
        } finally {
            sendMessageButton.disabled = false;
        }
    });

    function displayAlert(message, type) {
        successMessage.innerHTML = `
            <div class="alert alert-${type}">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>${message}</strong>
            </div>
        `;
    }
});
