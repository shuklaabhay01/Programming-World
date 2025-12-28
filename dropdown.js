

//dropdown.js
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.dropdown').forEach(d => {
            if (d !== toggle.parentElement) d.classList.remove('active');
        });
        toggle.parentElement.classList.toggle('active');
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
});