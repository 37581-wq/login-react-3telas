import './App.css';

function App() {

  function handleLogin() {
    alert("Tentando fazer login...");
  }

  return (
    <div className="container">
      
      <div className="left"></div>

      <div className="right">
        <div className="login-box">
          <div className="logo">NIKE</div>
          <h2>Fazer login</h2>

          <input type="text" placeholder="Digite seu login" />
          <input type="password" placeholder="Digite sua senha" />

          <button onClick={handleLogin}>ENTRAR</button>

          <a href="#">Esqueci meu login ou senha</a>
        </div>
      </div>

    </div>
  );
}

export default App;