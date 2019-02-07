
import url from '../../Config/Url';
import { GET_API_PETS, POST_API_ALL_PETS, PET_SELECT } from '../type';


export const getDataApiPets = (paylaod) => {
  return {
    type: GET_API_PETS,
    paylaod,
  };
};

export const postApiAllDataPets = (paylaod) => {
  return {
    type: POST_API_ALL_PETS,
    paylaod,
  };
};

export const postPetSelect = (paylaod) => {
  return {
    type: PET_SELECT,
    paylaod,
  };
};

export const getApiPetsAsync = () =>(dispatch)=> {
  return fetch(`${url}breeds/image/random/2`)
    .then(res => res.json())
    .then(json => json)
    .catch(error => console.log(error));
};

export const getApiAllPetsAsync = () =>(dispatch)=> {
  return fetch(`${url}breed/hound/images`)
    .then(res => res.json())
    .then(json => json)
    .catch(error => console.log(error));
};
