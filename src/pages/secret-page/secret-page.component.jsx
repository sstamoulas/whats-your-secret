import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Secrets from './../../components/secrets/secrets.component';

import { fetchSecretsStart } from './../../redux/secret/secret.actions';
import { generateRandomColor } from './../../redux/color/color.actions';

import * as ROUTES from './../../constants/routes';

import './secret-page.styles.scss';

const SecretPage = ({ color, secrets, fetchSecretsStart, generateRandomColor }) => {
  useEffect(() => {
    fetchSecretsStart();
  }, [fetchSecretsStart]);

  return (
    <Fragment>
      <Secrets secrets={secrets} color={color} />
      <Link to={ROUTES.LANDING}>Back</Link>
    </Fragment>
  )
};

const mapStateToProps = (state) => ({
  secrets: state.secret.secrets,
  color: state.color.currentColor,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSecretsStart: () => dispatch(fetchSecretsStart()),
  generateRandomColor: () => dispatch(generateRandomColor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecretPage);
