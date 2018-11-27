import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredRoute(props) {
  const {Component, path, adminIsSwitched} = props;
  console.log('props.state - ', props.state);
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component products={props.state.products} shownGameConsoles={props.shownGameConsoles} adminSwitch={props.state.adminSwitch} adminIsSwitched={adminIsSwitched}/>
    }} />
  );
}

export default SecuredRoute;