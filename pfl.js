window.onload;
let nome = localStorage.getItem('nomeUsuario');
let email = localStorage.getItem('emailUsuario');
let telefone = localStorage.getItem('telefoneUsuario');
let cpf = localStorage.getItem('cpfUsuario');
let senha = localStorage.getItem('senhaUsuario');
document.body.innerHTML = `
    <header class="header">
        <h1>Perfil do Usuário</h1>
    </header>
    
    <main class="profile-container">
        <h2>Seus Dados</h2>    
        <div class="user-info">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong>  ${email}<span id="userEmail"></span></p>
            <p><strong>Telefone: </strong> ${telefone}<span id="userPhone"></span></p>
            <p><strong>CPF: </strong> ${cpf}<span id="userCPF"></span></p>
            <p><strong>Senha: </strong> ${senha}<span id="userPassword"></span></p>
        </div>
    </main>
`
