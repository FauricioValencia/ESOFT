import React from 'react';
import { mount } from 'enzyme';
import ButtonCustom from '../../src/Components/Button/Button';
import Button from '@material-ui/core/Button';

describe('Probando componente boton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ButtonCustom />);
  });
  it('El boton esta recibiendo un string', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
});

