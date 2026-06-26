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