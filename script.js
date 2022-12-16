const toggleButton = document.getElementById('burger');
const navLinks = document.getElementsByName('nav');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

