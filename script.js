document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });

    const elements = document.querySelectorAll(
        ".section-title, .about-container, .skill-card, .project-card, .education-box, .contact-item"
    );

    const reveal = () => {
        const trigger = window.innerHeight * 0.85;

        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);
        
    reveal();
});

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("f92baAL1bAJxcxxnj");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const button = form.querySelector("button");
        button.innerText = "Sending...";
        button.disabled = true;

        emailjs.sendForm("service_dhb48jj", "template_6el0iwl", this)
            .then(() => {
                showToast("Message sent successfully!", "success");
                form.reset();
            })
            .catch((error) => {
                showToast("Failed to send message.", "error");
                console.log(error);
            })
            .finally(() => {
                button.innerText = "Send Message";
                button.disabled = false;
            });
    });
});

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}