document.querySelectorAll(".revista-col").forEach(col=>{
    col.style.opacity="0";
    col.style.transform="translateY(40px)";
});

const obsRevista=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.style.transition="1s ease";
            e.target.style.opacity="1";
            e.target.style.transform="translateY(0)";
        }
    });
},{threshold:.2});

document.querySelectorAll(".revista-col").forEach(col=>{
    obsRevista.observe(col);
});
