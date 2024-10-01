// JavaScript code can be used for animations, form validation, etc.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page Loaded");
    // Add your JavaScript code here for interactivity.
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
});
    function animateOnScroll() {
        const triggerHeight = window.innerHeight / 1.3;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerHeight) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }