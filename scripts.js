document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            section.style.backgroundColor = '#e0e0e0';
        });
        section.addEventListener('mouseout', function() {
            section.style.backgroundColor = '#f5f5f5';
        });
    });
});