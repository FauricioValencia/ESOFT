import { GET_API_PETS, POST_API_ALL_PETS, PET_SELECT } from '../type';

const initialState = {
  randomPets: [],
  allPetsList: [],
  petSelect: {},
};


const listRandomPets = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_PETS:
      return {
        ...state,
        randomPets: action.paylaod,
      };
    case POST_API_ALL_PETS:
      return {
        ...state,
        allPetsList: action.paylaod,
      };
    case PET_SELECT:
      return {
        ...state,
        petSelect: action.paylaod,
      };
    default:
      return state;
  }
};

export default listRandomPets;
