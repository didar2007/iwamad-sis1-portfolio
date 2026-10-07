const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const formSuccess = document.querySelector("#form-success");



themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.dataset.theme === "dark";

    if (isDarkMode) {
        document.body.removeAttribute("data-theme");
        themeIcon.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    } else {
        document.body.dataset.theme = "dark";
        themeIcon.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    }
});



contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

  

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }

  

    if (isValid) {
        formSuccess.textContent =
            "Message sent successfully! Thank you for reaching out.";

        contactForm.reset();
    }
});



function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";
}