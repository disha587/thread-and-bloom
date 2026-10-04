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
// =========================================
// FORMINIT ORDER SUBMISSION
// =========================================

/*document.addEventListener("DOMContentLoaded", function () {

    const orderForm = document.getElementById("orderForm");

    if (!orderForm) {
        console.error("Order form not found!");
        return;
    }

   // orderForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        console.log("ORDER FORM SUBMIT CLICKED");

        const submitButton = orderForm.querySelector(
            'button[type="submit"]'
        );

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        try {

            console.log("Creating Forminit...");

            const forminit = new Forminit();

            console.log("Forminit loaded successfully");

            const formData = new FormData(orderForm);

            console.log("Sending form to Forminit...");

            const result = await forminit.submit(
                "xiuplt42dcg",
                formData
            );

            console.log("Forminit response:", result);

            if (result.error) {

                console.error("Forminit error:", result.error);

                alert(
                    "Order could not be submitted:\n\n" +
                    result.error.message
                );

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit Order";
                }

                return;
            }

            // SUCCESS

            console.log("ORDER SUBMITTED SUCCESSFULLY!");

            const nameElement =
                document.getElementById("fullName");

            const successName =
                document.getElementById("successName");

            const name =
                nameElement
                    ? nameElement.value.trim().split(" ")[0]
                    : "friend";

            if (successName) {
                successName.textContent = name;
            }

            orderForm.style.display = "none";

            const successBox =
                document.getElementById("formSuccess");

            if (successBox) {
                successBox.classList.add("show");
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } catch (error) {

            console.error(
                "FORM SUBMISSION ERROR:",
                error
            );

            alert(
                "Something went wrong while sending your order.\n\n" +
                error.message
            );

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Submit Order";
            }
        }

    });

});*/
// Automatically add +91 before sending the order
document.addEventListener("DOMContentLoaded", function () {

    const orderForm = document.getElementById("orderForm");
    const phoneInput = document.getElementById("phone");

    if (orderForm && phoneInput) {

        orderForm.addEventListener("submit", function () {

            const number = phoneInput.value.replace(/\D/g, "");

            phoneInput.value = "+91" + number;

        });

    }

});