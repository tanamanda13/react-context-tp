import React from 'react';
import './App.css';
import LogButton from "./components/Login";
import Login from './components/Login';
import AuthState from './context/AuthState';

function App() {

  // const Auth =  React.createContext( [] );

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
