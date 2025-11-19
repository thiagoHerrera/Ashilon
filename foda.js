const fodaCards = document.querySelectorAll('.foda-card');

const obsFoda = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            obsFoda.unobserve(entry.target);
        }
    });
},{threshold:.25});

fodaCards.forEach(card=>obsFoda.observe(card));
