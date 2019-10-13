import React, { FunctionComponent, ReactElement } from 'react';
import { Route } from 'react-router';
import LoginContainer from './Login';

interface PublicContainerProps {
  history: any[];
  match: { [key: string]: any };
}

const PublicContainer: FunctionComponent<PublicContainerProps> = (props: PublicContainerProps): ReactElement => {
  let Component;

  switch (props.match.url) {
    case '/login':
      Component = LoginContainer;
      break;
    case '/signup':
      break;
    default:
      props.history.push('/login');

  }

  return (
    <div>
      Public Container Component!
      <Route path={props.match.url} component={Component} />
    </div>
  );
};

export default PublicContainer;
