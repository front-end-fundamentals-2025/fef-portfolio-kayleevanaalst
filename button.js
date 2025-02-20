const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggleButton.textContent = 'Light Mode';
} else {
    body.classList.add('light-theme');
    themeToggleButton.textContent = 'Dark Mode';
}

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

themeToggleButton.addEventListener('click', () => {
    console.log('Button clicked!');
    console.log(body.classList);
});