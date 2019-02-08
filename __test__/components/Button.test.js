import React from 'react';
import { shallow } from 'enzyme';
import ButtonCustom from '../../src/Components/Button/Button';

it('El boton esta recibiendo un string', () => {
  const wrapper = shallow(<ButtonCustom>ver más</ButtonCustom>);
  expect(wrapper.find('.button')).toMatch(/bonito/);
});
