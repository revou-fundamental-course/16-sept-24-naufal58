const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    // Display the current time
    const currentTime = document.getElementById('currentTime');
    const now = new Date();
    currentTime.textContent = now.toUTCString();

    // Handle form submission
    const messageForm = document.getElementById('messageForm');

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Capture form data
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        // Display form data
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayDob').textContent = dob;
        document.getElementById('displayGender').textContent = gender;
        document.getElementById('displayMessage').textContent = message;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the form and welcome message elements
    const messageForm = document.getElementById('messageForm');
    const userNameElement = document.getElementById('userName');

    // Handle form submission
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Capture the name input value
        let name = document.getElementById('name').value;

        // Check if the name is empty, if so, set it to 'User'
        if (name.trim() === "") {
            name = "User";
        }

        // Update the welcome message with the user's name or 'User'
        userNameElement.textContent = name;
    });
});