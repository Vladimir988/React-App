import React, {useContext} from 'react';
import MyInput from "../components/Ui/input/MyInput";
import MyButton from "../components/Ui/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div style={{maxWidth: '500px', margin: 'auto'}}>
      <h1>Login page:</h1>
      <form onSubmit={login}>
        <MyInput type="text" name="name" placeholder="Login:"/>
        <MyInput type="password" name="password" placeholder="Password:"/>
        <MyButton>Submit</MyButton>
      </form>
    </div>
  );
};

export default Login;