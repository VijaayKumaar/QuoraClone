import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewEjqtzNtVE-EU0pyR-nUVSoNATkWdGnEwOkaFIguva9d5GSMxj_-_JI6xDVu28WzDQ&usqp=CAU"
          alt="logo"
        />
        <button onClick={handleSubmit} className="btn-login">
          Login to continue
        </button>
      </div>
    </div>
  );
}

export default Login;
