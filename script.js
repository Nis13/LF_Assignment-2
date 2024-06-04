document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('theme--light');
    document.body.classList.toggle('theme--dark');


    const darkModeEllipse1 = document.getElementById('ellipse1');
    const darkModeEllipse2 = document.getElementById('ellipse2');
    const toggleButton = document.getElementById('toggle-btn_image');
    const hamburgerButton = document.getElementById('hamburger-img');
    const searchBtn = document.getElementById('search-btn');
    const cartBtn = document.getElementById('cart-btn')

    if (document.body.classList.contains('theme--dark')){
        darkModeEllipse1.classList.remove('hidden');
        darkModeEllipse2.classList.remove('hidden');
        toggleButton.src = "Images/dark-toggle.svg";
        searchBtn.src = "Images/Search.svg";
        hamburgerButton.src="Images/Hamburger.svg";
        cartBtn.src = "Images/Cart.svg";
    }
    else {
        darkModeEllipse1.classList.add('hidden');
        darkModeEllipse2.classList.add('hidden');
        toggleButton.src = "Images/light-toggle.png";
        searchBtn.src = "Images/black-search.svg";
        hamburgerButton.src = "Images/light-hamburger.svg";
        cartBtn.src = "Images/black-cart.svg";
    }
});