import React, { useState} from 'react';
import AuthState from '../context/AuthState';

function LogButton() {

  const [isAuth, setIsAuth] = useState(false);

  const handleClick = () => {
    setIsAuth(true)
  }

  return (
    <div>
      <button type="submit" onClick={handleClick}>se connecter</button>
    </div>
  );
}

export default LogButton; 