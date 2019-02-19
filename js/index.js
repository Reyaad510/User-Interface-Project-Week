// JS goes here




// Menu Overlay



const menuButton = document.querySelector('.menu-button');
const hamburgerContent = document.querySelector('.hamburger-content');
const close = document.querySelector('.closebtn');



menuButton.addEventListener('click', e => {
    hamburgerContent.classList.toggle('hamburger-hidden');
    menuButton.classList.toggle('menu-hidden');
    close.classList.toggle('closebtn-hidden');
});

close.addEventListener('click', e => {
    hamburgerContent.classList.toggle('hamburger-hidden');
    menuButton.classList.toggle('menu-hidden');
    close.classList.toggle('closebtn-hidden');
})
















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
    }
}








const tabs = document.querySelectorAll('.tab-links .link').forEach(tab => new TabLink(tab));

