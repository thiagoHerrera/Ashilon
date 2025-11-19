// REGISTRO
gsap.registerPlugin(ScrollTrigger);


// HERO — zoom + fade cinematic
gsap.from(".hero-title", {
    opacity: 0,
    y: 80,
    duration: 2.2,
    ease: "power3.out"
});

gsap.from(".hero-sub", {
    opacity: 0,
    y: 40,
    duration: 1.8,
    delay: .5,
    ease: "power2.out"
});

gsap.from(".hero-frase", {
    opacity: 0,
    y: 30,
    duration: 1.8,
    delay: .9,
    ease: "power2.out"
});


// BOTÁNICO flotante (hero decor)
gsap.to(".decor-left", {
    y: 20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".decor-right", {
    y: -20,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


// STORYTELLING — cada capítulo aparece como escena
gsap.utils.toArray(".chapter").forEach((chap, i) => {
    gsap.from(chap, {
        scrollTrigger: {
            trigger: chap,
            start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power3.out"
    });
});


// SECCIÓN REVISTA — columnas aparecen en diagonales suaves
gsap.utils.toArray(".revista-col").forEach((col, i) => {
    gsap.from(col, {
        scrollTrigger: {
            trigger: col,
            start: "top 85%",
        },
        opacity: 0,
        y: 70,
        duration: 1.5,
        delay: i * 0.1,
        ease: "power3.out"
    });
});


// INGREDIENTES — imágenes + texto con entrada elegante
gsap.utils.toArray(".ingrediente-item").forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 80%",
        },
        opacity: 0,
        y: 90,
        duration: 1.6,
        ease: "power3.out"
    });
});


// APP CARDS — flotan con efecto 3D sutil al aparecer
gsap.utils.toArray(".app-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: i * 0.1,
        ease: "power2.out"
    });
});


// ENCUESTAS — tarjetas entran desde los lados
gsap.utils.toArray(".enc-box").forEach((box, i) => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 90%",
        },
        opacity: 0,
        x: i % 2 === 0 ? -80 : 80,
        duration: 1.4,
        ease: "power3.out"
    });
});


// FODA — tarjetas suben como bloques
gsap.utils.toArray(".foda-card").forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        opacity: 0,
        y: 70,
        duration: 1.4,
        ease: "power2.out"
    });
});


// FOOTER — fade final elegante
gsap.from(".footer", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
    },
    opacity: 0,
    y: 80,
    duration: 1.4,
    ease: "power3.out"
});
