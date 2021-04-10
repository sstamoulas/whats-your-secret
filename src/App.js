import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page.component';
import SecretPage from './pages/secret-page/secret-page.component';
import NotFoundPage from './pages/not-found-page/not-found-page.component';

import * as ROUTES from './constants/routes';

import './App.styles.scss';

const App = ({ color }) => {
  const bodyElement = document.getElementsByTagName('body')[0];

  bodyElement.style.backgroundColor = color;

  return (
    <div className='container'>
      <div className='sub-container'>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SECRET} component={SecretPage} />
          <Route path={ROUTES.NOT_FOUND} component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  color: state.color.currentColor,
});

export default connect(mapStateToProps)(App);