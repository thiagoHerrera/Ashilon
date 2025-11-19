const ingItems = document.querySelectorAll('.ingrediente-item');

const obsIng = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.classList.add('visible');
        }
    });
},{threshold:.25});

ingItems.forEach(i=>obsIng.observe(i));
