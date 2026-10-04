document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript loaded successfully");

    // =========================================
    // GET ALL PAGES
    // =========================================

    const pages = document.querySelectorAll(".page");

    console.log("Pages found:", pages.length);


    // =========================================
    // GET NAVIGATION LINKS
    // =========================================

    const navLinks = document.querySelectorAll("[data-page]");

    console.log("Navigation links found:", navLinks.length);


    // =========================================
    // SHOW PAGE
    // =========================================

    function showPage(pageName) {

        console.log("Trying to open:", pageName);

        const targetPage = document.getElementById(
            "page-" + pageName
        );


        // Check whether page exists

        if (!targetPage) {

            console.error(
                "ERROR: page-" + pageName + " does not exist"
            );

            return;
        }


        console.log(
            "Page found:",
            targetPage.id
        );


        // =========================================
        // HIDE ALL PAGES
        // =========================================

        pages.forEach(function (page) {

            page.classList.remove("active");

        });


        // =========================================
        // SHOW SELECTED PAGE
        // =========================================

        targetPage.classList.add("active");


        // =========================================
        // UPDATE NAVIGATION
        // =========================================

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("data-page") === pageName
            ) {

                link.classList.add("active");

            }

        });


        // =========================================
        // SCROLL TO TOP
        // =========================================

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // =========================================
    // NAVIGATION CLICK
    // =========================================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const pageName =
                link.getAttribute("data-page");

            console.log(
                "Navigation clicked:",
                pageName
            );


            if (pageName) {

                showPage(pageName);

            }

        });

    });


    // =========================================
    // START HOME PAGE
    // =========================================

    showPage("home");


    // =========================================
    // GALLERY FILTER
    // =========================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                button.getAttribute("data-filter");


            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            galleryItems.forEach(function (item) {

                const category =
                    item.getAttribute("data-cat");


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });


    // =========================================
    // MOBILE MENU
    // =========================================

    const hamburgerBtn =
        document.getElementById("hamburgerBtn");

    const mobilePanel =
        document.getElementById("mobilePanel");

    const closeMobile =
        document.getElementById("closeMobile");


    if (hamburgerBtn && mobilePanel) {

        hamburgerBtn.addEventListener(
            "click",
            function () {

                mobilePanel.classList.add("open");

            }
        );

    }


    if (closeMobile && mobilePanel) {

        closeMobile.addEventListener(
            "click",
            function () {

                mobilePanel.classList.remove("open");

            }
        );

    }


    // =========================================
    // MOBILE NAVIGATION
    // =========================================

    const mobileLinks =
        document.querySelectorAll(
            "#mobilePanel [data-page]"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const pageName =
                    link.getAttribute("data-page");


                if (pageName) {

                    showPage(pageName);

                }


                if (mobilePanel) {

                    mobilePanel.classList.remove("open");

                }

            }
        );

    });


    console.log(
        "Thread & Bloom website ready."
    );

});
const uploadBox = document.getElementById("uploadBox");
const refImage = document.getElementById("refImage");
const fileName = document.getElementById("fileName");

uploadBox.addEventListener("click", function () {
    refImage.click();
});

refImage.addEventListener("change", function () {
    if (refImage.files.length > 0) {
        fileName.textContent = refImage.files[0].name;
    }
});