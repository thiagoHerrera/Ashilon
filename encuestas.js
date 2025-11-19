const bars = document.querySelectorAll(".bar-item");

const obsBars = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const item = entry.target;
            const fill = item.querySelector(".bar-fill");
            const num = item.querySelector(".bar-num");
            const value = item.dataset.value;

            fill.style.width = value + "%";

            // contador animado
            let current = 0;
            const interval = setInterval(()=>{
                if(current >= value) { clearInterval(interval); }
                num.textContent = current++ + "%";
            }, 15);

            obsBars.unobserve(item);
        }
    });
},{threshold:.3});

bars.forEach(bar=>obsBars.observe(bar));
