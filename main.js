import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="card">
      <h1>Login Teste!</h1>
      <form action="http://localhost:3000/login" method="POST">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required>
          </div>
          <div class="input-group">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
          </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
`
