document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class "tab-links" and set up a click event listener
    document.querySelectorAll('.tab-links a').forEach(tab => {
        tab.onclick = function(e) {
            e.preventDefault();

            // Remove "active" class from all tabs and hide all tab content
            document.querySelectorAll('.tab-links li').forEach(li => li.classList.remove('active'));
            document.querySelectorAll('.tabcontent').forEach(content => content.style.display = 'none');

            // Add "active" class to the clicked tab and show the corresponding tab content
            this.parentElement.classList.add('active');
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        };
    });

    // Optionally, activate the first tab by default
    document.querySelector('.tab-links li:first-child a').click();
});

function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("toggleButton");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Меньше"; // Change the button text to 'Read Less'
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Читать далее"; // Reset the button text to 'Read More'
    }
}