import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonCustom = (props) => {
  const { children } = props;
  return (
    <Button variant="contained" color="primary">{children}</Button>
  );
};

ButtonCustom.propTypes = {
  children: PropTypes.string.isRequired,
};

export default (ButtonCustom);
