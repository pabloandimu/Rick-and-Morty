import React from "react";
import styled from "./Form.module.css";
import { validation } from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: ""
  });

  function handleInputChange(e) {
    setUserData({...userData, [e.target.name]: e.target.value });
    setErrors(validation({...userData, [e.target.name]: e.target.value }))
  };

  function handleSubmit (e){
    e.preventDefault()
    props.login(userData);
  }

  return (
    <div className={styled.divPadre}>
      <form className={styled.form} onSubmit={handleSubmit}>
      {/* <div>
      <form onSubmit={handleSubmit}> */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="ingrese el email de usuario"
          type="text"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p>
        
              
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"          
          type="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p>{errors.password && errors.password}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
