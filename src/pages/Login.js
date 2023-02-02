
import { Component } from "react";

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  //essa função captura as infomações da caixa 
  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    })
  }
  //Aqui você pode desenvolver uma lógica para disparar o botão para uma rota qualquer da aplicação

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { email, password, disabled } = this.state
    return(
      <div>
        <form>
          <input
            className="input-email"
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            className="input-pass"
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={this.handleChange}
            value={ password }
          />
          <button
            type="button"
            disabled={!disabled}
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    )
  }
};

export default Login;
