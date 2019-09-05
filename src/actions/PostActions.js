import {POST_LIST, POST_CREATE} from './types';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

const URL = 'http://192.168.0.15:3000/api/home-decor/post';

export const postList = () => {
  return dispatch => {
    axios
      .get(URL)
      .then(res => dispatch({type: POST_LIST, payload: res.data.posts}));
  };
};

export const postCreate = (post, navigation) => {
  return dispatch => {
    axios({
      method: 'post',
      url: URL,
      data: post,
      config: {headers: {'Content-Type': 'multipart/form-data'}},
    })
      .then(res => {
        ToastAndroid.show('Salvo com sucesso!', ToastAndroid.SHORT);
        dispatch({type: POST_CREATE, payload: {posts: {}}});
      })
      .then(res => dispatch(postList()))
      .then(res => navigation.navigate('Home'))
      .catch(error => {
        ToastAndroid.show('Ops... Aconteceu alguma coisa.', ToastAndroid.SHORT);
      });
  };
};
