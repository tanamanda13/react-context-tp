import React from 'react';
import AuthState from '../context/AuthState';

function LogView() {

  return (
    <div>
       <AuthState.Consumer>
         {
           value
         }
       </AuthState.Consumer>
    </div>
  );
}

export default LogView;
