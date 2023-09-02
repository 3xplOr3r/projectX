let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '75px',
    duration: '2000',
    reset: true

})

sr.reveal('.home-text', {delay:200 , origin: 'left'})
sr.reveal('.home-image', {delay:400 , origin: 'right'}) 
sr.reveal('.about, .services, .contact, .btn, .copyright', {delay:200 , origin: 'bottom'}) 

const typed = new Typed(' .multiple-text', {
    strings: ['Frontend Developer' ,'Content Writer' , 'Programmer' , 'NaSa-HaCkEr],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1000,
    loop: true

});    
