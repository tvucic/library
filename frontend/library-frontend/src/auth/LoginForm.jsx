// import React, { useState } from "react";
// import { Redirect } from "react-router";
// import { login } from "./AuthService";

// const LoginForm = ({
//   isLogged,
//   setAuthLogin,
//   setAuthPassword,
//   setAuthStatus,
// }) => {

//   const [state, setState] = useState({ login: "", password: "" });

//   const onLoginChange = (event) => {
//     setAuthLogin(event.target.value);
//   };

//   const onPasswordChange = (event) => {
//     setAuthPassword(event.target.value);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     login(state.login, state.password).then((r) => {
//       setAuthStatus(true);
//     });
//     event.preventDefault();
//   };

//   isLogged && <Redirect to={"/"} />;

//   return (
//     <div>
//       <form onSubmit={handleSubmit} onChange={handleChange}>
//         <input
//           id={"login"}
//           type={"text"}
//           value={state.login}
//           onChange={onLoginChange}
//           placeholder={"Login"}
//         />
//         <input
//           id={"password"}
//           type={"password"}
//           value={state.password}
//           onChange={onPasswordChange}
//           placeholder={"Password"}
//         />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React from "react";

import { Redirect } from "react-router";
import { login } from "./AuthService";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      login: event.target.login,
      password: event.target.password,
    });
  }

  onLoginChange = (event) => {
    this.props.setAuthLogin(event.target.value);
  };

  onPasswordChange = (event) => {
    this.props.setAuthPassword(event.target.value);
  };

  handleSubmit(event) {
    login(this.props.login, this.props.password).then((r) => {
      this.props.setAuthStatus(true);
    });
    event.preventDefault();
  }

  render() {
    if (this.props.isLogged) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input
            id={"login"}
            type={"text"}
            value={this.props.login}
            onChange={this.onLoginChange}
            placeholder={"Login"}
          />
          <input
            id={"password"}
            type={"password"}
            value={this.props.password}
            onChange={this.onPasswordChange}
            placeholder={"Password"}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default LoginForm;
