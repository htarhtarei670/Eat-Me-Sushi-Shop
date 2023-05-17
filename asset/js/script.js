// for nav menu toggle
let navMenu = document.querySelector('.nav__menu');
navToggle = document.querySelector('.nav__toggle');
navClose = document.querySelector('.nav__close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show')
    })

}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');

    })

}



//when we scroll our page more than 100vh height nav bar will contain bottom box shawdow
window.addEventListener('scroll', () => {
    header = document.querySelector('.header');

    header.classList.toggle('scroll', window.scrollY > 100);
})



// for switch theme
let themeBtn = document.querySelector('.nav__theme');
body = document.querySelector('body');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    isDarkTheme = body.classList.contains('dark-theme');

    themeBtn.innerHTML = isDarkTheme ? `<i class = "ri-sun-line"> </i>` : ` <i class="ri-moon-line"></i>`;

    //to storage current theme teporary on cookie
    localStorage.setItem("theme", isDarkTheme ? "Dark" : "Light");
})


if (localStorage.getItem("theme") === "Dark") {
    body.classList.add("dark-theme");
    themes.innerHTML = `<i class = "ri-sun-line"> </i>`;
}


// for scroll up btn 
const scrollUpBtnShow = () => {
    let scrollUpBtn = document.querySelector('.scrollUp');

    window.scrollY > 100 ? scrollUpBtn.classList.add('show') : scrollUpBtn.classList.remove('show');
}
window.addEventListener('scroll', scrollUpBtnShow);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(`.home__sushi-img, .contactUs__subscribe-box, .summary__logo, .summary__mainMenu , .summary__information, .summary__address,.summary__socialMedia,#footer`);
sr.reveal(`.home__content`, { origin: 'bottom' });
sr.reveal(`.about__content, .recently__detail`, { origin: 'left' });
sr.reveal(`.sushi-img, .recently__img`, { origin: 'right' });
sr.reveal(`.popular__card`, { intervar: 100 });