let lastScrollPosition = 0;
const header = document.querySelector('#main-header'); // Select by ID

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down
        header.classList.add('hidden'); // Add the 'hidden' class to hide the header
        header.classList.remove('visible');
    } else {
        // User is scrolling up
        header.classList.remove('hidden');
        header.classList.add('visible'); // Add the 'visible' class to show the header
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
});
