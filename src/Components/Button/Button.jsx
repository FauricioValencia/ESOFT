import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonCustom = (props) => {
  const { children } = props;
  return (
    <Button className="button" variant="contained" color="primary">{children}</Button>
  );
};

ButtonCustom.propTypes = {
  children: PropTypes.string,
};
ButtonCustom.defaultProps = {
  children: '-',
};
export default (ButtonCustom);
