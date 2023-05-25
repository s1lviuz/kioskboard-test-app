import './style.css'
import KioskBoard from 'kioskboard'

KioskBoard.init({
  keysArrayOfObjects: null,
  keysJsonUrl: '/kioskboard-keys-pt-br.json',
  language: 'pt-br',
  theme: 'light',
  cssAnimations: true,
  cssAnimationsDuration: 300,
  cssAnimationsStyle: 'slide',
  keysFontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  keysFontSize: '22px',
  keysFontWeight: 'normal',
  keysIconSize: '25px',
  keysEnterText: 'Enter',
  keysEnterCanClose: true,
  capsLockActive: false,
  autoScroll: false
})

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="card">
      <h1>Login Teste!</h1>
      <form action="http://localhost:3000/login" method="POST">
          <div class="input-group">
            <label>Email</label>
            <input type="email" id="email" name="email" class="js-kioskboard-input" data-kioskboard-type="all" data-kioskboard-placement="bottom" data-kioskboard-specialcharacters="true" placeholder="Digite seu email" required>
          </div>
          <div class="input-group">
            <label>Senha</label>
            <input type="password" id="password" name="password" class="js-kioskboard-input" data-kioskboard-type="all" data-kioskboard-placement="bottom" data-kioskboard-specialcharacters="true" placeholder="Digite sua senha" required>
          </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
`

KioskBoard.run('.js-kioskboard-input')
