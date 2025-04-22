// Add event listeners to the header and footer components
document.addEventListener('DOMContentLoaded', function() {
    const headerComponent = document.querySelector('header-component');
    const footerComponent = document.querySelector('footer-component');

    headerComponent.addEventListener('click', function() {
        console.log('Header component clicked');
    });

    footerComponent.addEventListener('click', function() {
        console.log('Footer component clicked');
    });
});
