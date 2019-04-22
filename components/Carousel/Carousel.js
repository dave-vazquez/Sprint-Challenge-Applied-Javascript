class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        
        this.leftButton = carousel.querySelector('.left-button');
        this.rightButton = carousel.querySelector('.right-button');
        
        this.images = carousel.querySelectorAll('img');
        this.imgIndex = 0;

        this.leftButton.addEventListener('click', ()=> {
            this.decrementIndex();
            this.displayCurrentImage();
        });

        this.rightButton.addEventListener('click', ()=> {
            this.incrementIndex();
            this.displayCurrentImage();
        });
    }

    decrementIndex() {
        this.imgIndex = (this.imgIndex - 1 < 0) ? this.images.length - 1 : this.imgIndex - 1;
    }

    incrementIndex() {
        this.imgIndex = (this.imgIndex + 1 > this.images.length - 1) ? 0 : this.imgIndex + 1;
    }

    displayCurrentImage() {
        console.log(TweenMax);
        this.images.forEach((image => image.style.display = 'none'));
        this.images[this.imgIndex].style.display = 'initial';
    }
}

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

new Carousel(document.querySelector('.carousel'));
