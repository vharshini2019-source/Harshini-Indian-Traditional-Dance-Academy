
/* =========================================================
   HARSHINI INDIAN TRADITIONAL DANCE ACADEMY
   MAIN JAVASCRIPT FILE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }


    /* ================= CLOSE MENU AFTER CLICK ================= */

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


    /* ================= HEADER SCROLL EFFECT ================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* ================= SIMPLE SCROLL ANIMATION ================= */

    const animatedElements = document.querySelectorAll(
        ".dance-card, .feature-box, .intro-text, .intro-image"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

});
/* =========================================================
   STATE-WISE DANCE FILTER
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const stateDanceCards = document.querySelectorAll(".state-dance-card");
const danceSearch = document.getElementById("danceSearch");


/* ================= FILTER FUNCTION ================= */

function filterDances() {

    const activeButton = document.querySelector(".filter-btn.active");

    const selectedRegion =
        activeButton ? activeButton.getAttribute("data-region") : "all";

    const searchText =
        danceSearch ? danceSearch.value.toLowerCase().trim() : "";


    stateDanceCards.forEach(function (card) {

        const cardRegion =
            card.getAttribute("data-region");

        const searchableText =
            card.getAttribute("data-search").toLowerCase();


        const regionMatch =
            selectedRegion === "all" ||
            cardRegion === selectedRegion;


        const searchMatch =
            searchableText.includes(searchText);


        if (regionMatch && searchMatch) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* ================= REGION BUTTON CLICK ================= */

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active class */

        this.classList.add("active");


        /* Filter cards */

        filterDances();

    });

});


/* ================= SEARCH ================= */

if (danceSearch) {

    danceSearch.addEventListener("input", function () {

        filterDances();

    });

}
/* =========================================================
   GALLERY FILTER
========================================================= */

const galleryFilters =
    document.querySelectorAll(".gallery-filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


function filterGallery(category) {

    galleryItems.forEach(function (item) {

        const itemCategory =
            item.getAttribute("data-category");


        if (
            category === "all" ||
            itemCategory === category
        ) {

            item.classList.remove("hidden");

        } else {

            item.classList.add("hidden");

        }

    });

}


/* ================= FILTER BUTTON CLICK ================= */

galleryFilters.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active from all buttons */

        galleryFilters.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active to clicked button */

        this.classList.add("active");


        /* Get selected category */

        const selectedCategory =
            this.getAttribute("data-category");


        /* Filter gallery */

        filterGallery(selectedCategory);

    });

});
/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const dance =
            document.getElementById("dance").value;

        const level =
            document.getElementById("level").value;

        const message =
            document.getElementById("message").value.trim();


        /* Basic validation */

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            dance === "" ||
            level === "" ||
            message === ""
        ) {

            formMessage.textContent =
                "Please fill in all the required fields.";

            return;

        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            return;

        }


        /* Phone validation */

        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";

            return;

        }


        /* Success message */

        formMessage.textContent =
            "Thank you! Your dance enquiry has been submitted successfully.";


        /* Clear form */

        contactForm.reset();

    });

}