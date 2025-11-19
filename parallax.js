document.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    // profundidad 1 (lenta)
    document.querySelector(".layer-back").style.transform =
        `translateY(${scroll * 0.15}px)`;

    // profundidad 2 (media)
    document.querySelector(".layer-mid").style.transform =
        `translateY(${scroll * 0.30}px)`;

    // profundidad 3 (rápida)
    document.querySelector(".layer-front").style.transform =
        `translateY(${scroll * 0.45}px)`;

});
