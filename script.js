/* =========================
   AYUSH DUBEY PORTFOLIO
   JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const sections = document.querySelectorAll(
        ".section, .hero-content, .hero-terminal, .profile-section"
    );

    const navLinks = document.querySelectorAll(".nav-links a");

    const pageSections = document.querySelectorAll(
        "section[id]"
    );

    const navbar = document.querySelector(".navbar");

    const cursor = document.querySelector(".cursor");


    /* =========================
       SCROLL REVEAL
    ========================= */

    sections.forEach((section) => {
        section.classList.add("reveal");
    });

    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .about-card, .contact-content"
    );

    cards.forEach((card) => {
        card.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    sections.forEach((section) => {
        revealObserver.observe(section);
    });


    cards.forEach((card) => {
        revealObserver.observe(card);
    });


    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const targetPosition =
                target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        pageSections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active-nav");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active-nav");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =========================
       TERMINAL CURSOR
    ========================= */

    if (cursor) {

        setInterval(() => {

            cursor.style.opacity =
                cursor.style.opacity === "0"
                    ? "1"
                    : "0";

        }, 550);

    }


    /* =========================
       NAVBAR ON SCROLL
    ========================= */

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,0.35)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =========================
       PROJECT CARD STAGGER
    ========================= */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


    /* =========================
       SKILL CARD STAGGER
    ========================= */

    const skillCards =
        document.querySelectorAll(".skill-card");


    skillCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    });


    /* =========================
       PAGE READY
    ========================= */

    document.body.classList.add("page-ready");

});