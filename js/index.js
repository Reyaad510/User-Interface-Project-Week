




// Menu Overlay


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




// Services Js

// Class TabLink

class TabLink {
    constructor(tab) {
        this.tab = tab;
        this.tabData = this.tab.dataset.tab;
        this.tabCard = document.querySelector(`.card[data-tab='${this.tabData}']`);
        this.tabCard = new TabCard(this.tabCard);
        this.tab.addEventListener('click', this.tabClick.bind(this));
    }

    tabClick() {
        document.querySelectorAll('.link').forEach(link => link.classList.remove('active-tab'));
        

        this.tab.classList.add('active-tab');
        this.tabCard.toggleCard();
        
    }
}

class TabCard {
    constructor(card) {
        this.card = card;
    }

    toggleCard () {

        document.querySelectorAll('.card').forEach(card => card.classList.remove('active-card'));

       this.card.classList.add('active-card');
         TweenMax.from(".card", 0.5, {opacity:0, scale:0, ease:AudioBufferSourceNode.easeOUt});

       
       
    }
}



const tabs = document.querySelectorAll('.tab-links .link').forEach(tab => new TabLink(tab));



// GSAP

//  TweenMax.from(".card", 3, {opacity:0, scale:0, ease:AudioBufferSourceNode.easeOUt});
// TweenMax.from(".midImg", 0.5, {opacity:0, scale:0, ease:AudioBufferSourceNode.easeOUt, delay: 0.5});