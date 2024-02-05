const button = document.getElementById('darkModeToggle');
let isNightMode = false;

button.addEventListener('click', function() {
    isNightMode = !isNightMode;
    button.textContent = isNightMode ? 'Moon' : 'Sun';

    // You can add additional code here to toggle dark mode styles or perform other actions.
    // For example, you can toggle a CSS class on the body element:
    document.body.classList.toggle('night-mode', isNightMode);
});
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
