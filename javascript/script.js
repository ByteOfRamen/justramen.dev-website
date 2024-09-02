document.getElementById("coffee-trigger").addEventListener("click", function() {
    var coffeeImage = document.getElementById("coffee-image");
    var coffeeInfo = document.getElementById("coffee-info");
    var coffeeText = coffeeInfo.querySelector("p");

    // After the sliding animation completes, show the hidden section and text
    setTimeout(function() {
        coffeeInfo.style.height = "30px";
        coffeeImage.style.transform = "translateX(1000%)";
        coffeeInfo.style.opacity = "1"; // Fade in the coffee-info section
        coffeeText.style.opacity = "1"; // Fade in the text inside the section
    }, 250); // Match this duration to the CSS transition duration
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.projects-container');
    const carousel = document.querySelector('.projects-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    const scrollAmount = container.offsetWidth / 3; // Adjust based on visible items

    rightArrow.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});
