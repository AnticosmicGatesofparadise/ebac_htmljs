const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b');
    
    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Tente outra vez`;
    const mensagemVerdade = `Esta correto o número ${campoB} é maior que o número ${campoA}`;
    
    if(campoA >= campoB){
        const Falso = document.querySelector('.mensagem-errada');
        Falso.innerHTML = mensagemFalso;
        Falso.style.display = 'block';
        document.querySelector('.mensagem-correta').style.display = 'none';
    }
    else{     
        const Verdade = document.querySelector('.mensagem-correta');
        Verdade.innerHTML = mensagemVerdade;
        Verdade.style.display = 'block';
        document.querySelector('.mensagem-errada').style.display = 'none';
    }
});