let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modal = document.querySelector('dialog');

    openModal.onclick = () => {
        modal.showModal();
    }
        function salvarNome() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cpf = document.getElementById('cpf').value;
        const senha = document.getElementById('senha').value;
        localStorage.setItem('nomeUsuario', nome);
        localStorage.setItem('emailUsuario', email);
        localStorage.setItem('telefoneUsuario', telefone);
        localStorage.setItem('cpfUsuario', cpf);
        localStorage.setItem('senhaUsuario', senha);
    };

    let cpf = document.getElementById('cpf');
    let telefone = document.getElementById('telefone');
    
    cpf.addEventListener('keypress',()=>{
        let cpfLength = cpf.value.length;
        if(cpfLength === 3 || cpfLength === 7){
            cpf.value += ".";
        }else if(cpfLength === 11){
            cpf.value += "-";
        }
    });
    
    telefone.addEventListener('keypress', ()=>{
        let telLength = telefone.value.length;
        if(telLength === 0){
            telefone.value += '(';
        }else if(telLength === 3){
            telefone.value += ') ';
        }else if(telLength === 11){
            telefone.value += '-';
        }
    });