document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const attendanceButtons = document.querySelectorAll(".attendance-btn");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Hide all tab contents and remove active class from all tabs
            tabContents.forEach(content => content.style.display = "none");
            tabButtons.forEach(btn => btn.classList.remove("active"));

            // Show the clicked tab content and add active class
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";
            button.classList.add("active");
        });
    });

    // Set the default tab (home) to be displayed
    document.getElementById("home").style.display = "block";

    // Handle attendance button state toggling
    attendanceButtons.forEach(button => {
        button.addEventListener("click", () => {
            const parentRow = button.closest("tr");
            parentRow.querySelectorAll(".attendance-btn").forEach(btn => btn.classList.remove("clicked"));
            button.classList.add("clicked");

            // Add color effects for attendance buttons
            attendanceButtons.forEach(button => {
                if (button.dataset.status === 'P') {
                    button.classList.add('present-color');
                } else if (button.dataset.status === 'A') {
                    button.classList.add('absent-color');
                }
            });
        });
    });
});
