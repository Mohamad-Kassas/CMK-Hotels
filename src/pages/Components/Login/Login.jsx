import React, { Component } from "react";

class Login extends Component {
  // Define state variables for the input values
  state = {
    Username: "",
    Password: ""
  }

  // Define a function to handle the input change event
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Define a function to handle the button click event
  handleClick = () => {
    // Do something with the input values (e.g. log them to the console)
    console.log(`Username: ${this.state.Username}`);
    console.log(`Password: ${this.state.Password}`);
  }

  render() {
    return (
      <div>
        <label>
          Username:
          <input
            type="text"
            name="Username"
            value={this.state.Username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
            Password:
          <input
            type="text"
            name="Password"
            value={this.state.Password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleClick}>Sign in</button>
      </div>
    );
  }
}

export default Login;



// To function change, should work but not tested

// import React, { useState } from "react";

// function Login() {
//   // Define state variables for the input values
//   const [Username, setUsername] = useState("");
//   const [Password, setPassword] = useState("");

//   // Define a function to handle the input change event
//   // const handleInputChange = (e) => {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // };

//   // Define a function to handle the button click event
//   const handleClick = () => {
//     // Do something with the input values (e.g. log them to the console)
//     console.log(`Username: ${Username}`);
//     console.log(`Password: ${Password}`);
//   };

//   return (
//     <div>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="Username"
//           value={Username}
//           onChange={setUsername(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="text"
//           name="Password"
//           value={Password}
//           onChange={setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <button onClick={handleClick}>Sign in</button>
//     </div>
//   );
// }

// export default Login;