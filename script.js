emailjs.init({
    publicKey: "kVY20bwT1YTIofzp5",
});

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        // 1st email (YOU / admin)
        const adminMail = emailjs.sendForm(
            "service_9r1dkoq",
            "template_m861fve",
            form
        );

        // 2nd email (USER confirmation OR backup)
        const userMail = emailjs.sendForm(
            "service_9r1dkoq",
            "template_8xy3zgg",
            form
        );

        Promise.all([adminMail, userMail])
        .then(function () {

            alert("Booking submitted successfully!");
            form.reset();

        })
        .catch(function (error) {

            console.log("EmailJS Error:", error);
            alert("Error sending booking. Check console.");

        });

    });

});