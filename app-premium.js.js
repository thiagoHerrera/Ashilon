// Abrir Modal
document.querySelectorAll('.app-card').forEach(card=>{
    card.addEventListener('click',()=>{
        const id = card.dataset.modal;
        document.getElementById(id).style.display="flex";
    });
});

// Cerrar Modal
document.querySelectorAll('.close').forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.style.display="none";
    });
});

// Cerrar clickeando afuera
document.querySelectorAll('.modal').forEach(mod=>{
    mod.addEventListener('click',e=>{
        if(e.target===mod){
            mod.style.display="none";
        }
    });
});
