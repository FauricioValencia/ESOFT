// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const {Response, Request, Headers, fetch} = require('whatwg-fetch');
global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;
configure({ adapter: new Adapter() });
