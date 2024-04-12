// App.js
import React from 'react';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./App.css"
function App() {
  return (
    <>
      <a class="logo" href="#">
        <img src="src\assets\images\logo.png" alt="logo" />
      </a>
      
      <div className='formContainer'>
          <h2>Login</h2>
        <form>
          <div className='inputBlock' id='user'>
            <FontAwesomeIcon className='icon'icon={faUser} />
            <Input  Vtype="text" Vplaceholder="Enter your username" />
          </div>
          <div className='inputBlock' id='email'>
          <FontAwesomeIcon className='icon'icon={faEnvelope} />
            <Input  Vtype="email" Vplaceholder="Enter your email" />
          </div>
          <div className='inputBlock' id='password'>
            <FontAwesomeIcon className='icon'icon={faLock} />
            <Input  Vtype="password" Vplaceholder="Enter your password" />
          </div>
          <div className='buttons'></div>
          <button type="submit">Login</button>
          <button type="submit">register</button>
        </form>
      </div>
    </>
  );
}

export default App;
