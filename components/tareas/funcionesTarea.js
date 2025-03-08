function marcarTareas(){
    if(this.classList.contains('hola')){
        this.classList.remove('hola'); // ❌ Antes lo agregabas de nuevo
        this.querySelector('input').checked = false;
    }else{
        this.classList.add('hola');
        this.querySelector('input').checked = true;
    }
}

    
export {marcarTareas}