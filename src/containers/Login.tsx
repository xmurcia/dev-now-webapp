import React, { Fragment, ReactElement } from 'react';
import LoginComponent from '../components/Login';

interface LoginContainerProps {
  name: string;
}

const LoginContainer: React.FC<LoginContainerProps> = (props: LoginContainerProps): ReactElement => {

  return (
    <Fragment>
      <LoginComponent />
    </Fragment>
  );
};

export default LoginContainer;
