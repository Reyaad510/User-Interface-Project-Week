

class Dropdown {
    constructor(element) {
        this.element = element;

        this.menuButton = this.element.querySelector('.menu-button');

        this.hamburgerContent = this.element.querySelector('.hamburger-content');

        this.closeButton = this.element.querySelector('.closebtn');

        this.tween = TweenMax.to(".hamburger-content", 0.3, {xPercent:100, ease:Linear.easeInOut, paused:true});

        this.menuButton.addEventListener('click', () => {
            this.open();
        });

        this.closeButton.addEventListener('click', () => {
            this.close();
        })
    }

    open() {

        this.menuButton.classList.toggle('menu-hidden');
        this.closeButton.classList.toggle('closebtn-hidden');
        this.tween.play();
    }

    close() {

        this.menuButton.classList.toggle('menu-hidden');
        this.closeButton.classList.toggle('closebtn-hidden');
        this.tween.reverse();

    }
}




let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
