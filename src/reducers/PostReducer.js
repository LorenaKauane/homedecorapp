import {POST_LIST, POST_CREATE, POST_UPDATE} from '../actions/types.js';

const INITIAL_STATE = {
  category: '',
  _id: '',
  user: {
    _id: '',
    name: '',
    about: '',
    caminhoFoto: '',
    avatarImg: '',
    createdAt: '',
  },
  title: '',
  description: '',
  caminhoFoto: '',
  postImage: '',
  createdAt: '',
  postsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LIST:
      return {postsList: action.payload};
    case POST_CREATE:
      return {...state, ...action.payload};
    case POST_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
