import React, { useState} from 'react';
import LogButton from './LogButton';
import AuthState from '../context/AuthState';
import LogView from '../components/LogView';

const Login = () => {
  return (

    <AuthState.Provider value={{isAuth: false}}>
      <LogButton></LogButton>
      <LogView></LogView>
    </AuthState.Provider>

   

  )
}

export default Login;