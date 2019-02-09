import { getApiPetsAsync } from '../../src/store/actions/pets';

describe('probando promesas', () => {
  it('Realizando una peticion a la api', () => {
    const data = getApiPetsAsync();

    data().then((data) => {
       // eslint-disable-next-line no-console
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
