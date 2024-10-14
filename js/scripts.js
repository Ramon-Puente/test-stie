// JavaScript for handling any interactive functionality on the page

document.addEventListener('DOMContentLoaded', function () {
    // Example: Add smooth scroll to anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Console log to verify script load
    console.log("Page loaded and JavaScript executed.");
});
