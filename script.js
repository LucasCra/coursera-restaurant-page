document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navbarCollapse = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
});
