document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Change title and favicon when the page is not visible
        document.title = '🙏 Come back to Portfolio!';
        changeFavicon('/path/to/sad-favicon.ico');
    } else {
        // Restore original favicon and title when the page is visible
        document.title = 'Portfolio | Mangal Pratap Yadav'; // Replace with your normal title
        changeFavicon('/path/to/original-favicon.ico'); // Replace with your original favicon path
    }
});

function changeFavicon(src) {
    const link = document.createElement('link');
    const oldLink = document.querySelector('link[rel="icon"]');

    link.rel = 'icon';
    link.href = src;

    if (oldLink) {
        document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
}
