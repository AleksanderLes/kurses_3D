let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})

/* animation random letter */
const text = document.querySelector('.hero__title');

// оборачиваем каждое слово и каждую букву в div
const splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
        return `<div class="word">` +
            m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
            `</div>`;
    });
    return el;
};


const split = splitText(text);

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    TweenMax.from(el, 2.5, {
        opacity: 0,
        scale: .1,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0,
    })
});

/* animation hero */

const tl = gsap.timeline();

tl
    .from(".header__logo", { opacity: 0, scale: 0.5, duration: 0.6, })
    .from(".nav__item", { y: -30, opacity: 0, duration: 0.4, ease: "power1.inOut", stagger: 0.15, })

.from(".hero__descr", { opacity: 0, scale: 0.5, duration: 1, }, 2)
    .from(".hero__right", { opacity: 0, scale: 0.5, x: 200, duration: 1, }, 1.1)
    .from(".hero__btn", { y: 50, opacity: 0, duration: 0.6, }, 2.5)

gsap.registerPlugin(ScrollTrigger);

/* Scroll animation  */

ScrollTrigger.create({
    animation: gsap.from(".benefits__item", {
        scale: 0,
        opacity: 0,
    }),
    trigger: '.benefits',

    start: 'top center',
    end: '+=200px',
    scrub: true,

})
ScrollTrigger.create({
    animation: gsap.to(".benefits", {
        x: "100%",
        opacity: 0,

    }),
    trigger: '.teachers',

    start: 'top center',
    end: '+=500px',
    scrub: true,

})

ScrollTrigger.create({
        animation: gsap.from(".teachers__item", {
            scale: 2,
            opacity: 0,
            stagger: 0.4,

        }),
        trigger: '.teachers',

        start: '-30% center',
        end: '+=500px',
        scrub: true,

    })
    /*
        gsap.to(".hero__btn", {
        ScrollTrigger: {
            trigger: '.hero',
            markers: true,
            start: 'top top',
            end: 'bottom',
            scrub: true,
            pin: true
        },

        y: 500,
    });*/
