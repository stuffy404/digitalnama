window.onload = function name() {
    const navMenuBtn = document.querySelector(".openNavMenu"); 
    const navMenu = document.querySelector("#navBar .menu");
    const links = document.querySelectorAll("#navBar li");



    navMenuBtn.addEventListener("click", (e) => {
        navMenu.classList.toggle("hide");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.add("hide");   
        });
    });

    const cards = document.querySelectorAll(".card")

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.querySelector(".content").classList.toggle("hide");
        });
    });

    // const swiper = new Swiper(".swiper", {
    //     direction: 'horizontal',
    //     loop: false,
    //     pagination:{
    //         el: ".swiper-pagination"
    //     }
    // });

    gsap.from("#heroSection h1, #heroSection p, #heroSection .btn", {
        y: 100,
        duration: 0.6,
        ease: "power",
        stagger: 0.2
    });

    gsap.registerPlugin(ScrollTrigger);

    // gsap.from(".VLine", {
    //     opacity: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //         triggger: "#heroSection",
    //         start: "top bottom",
    //     }
    // });

    gsap.from(".animate h3, .animate p", {
        x: 100,
        duration:1,
        stagger: 0.1,
        ease: "poweri.out",
        scrollTrigger:{
            trigger: ".animate",
            start: "0% bottom"
        }
    });

    gsap.to("#services .iconBtn", {
        y: 5,
        duration: 1.5,
        delay: 0.5,
        repeat: -1,
        ease: "bounce.out",

    });

    gsap.from("#contactUs h2, #contactUs .btn",{
        y: 100,
        scrollTrigger:{
            trigger: "#contactUs",
            start: "90% bottom"
        },
        ease: "poweri.out",
        stagger: 0.1
    });


}

    