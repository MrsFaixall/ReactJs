import React from 'react';
import AuthLayouts from '../Components/Layouts/AuthLayouts';
import FormLogin from '../Components/Fragment/FormLogin';

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="Login">
      <FormLogin />
      
    </AuthLayouts>
  );
};

export default LoginPage;
