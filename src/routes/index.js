import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../components/Home/Home';
import Post from '../components/Post/Post';
import NewPost from '../components/Post/NewPost';

export default createStackNavigator(
  {
    Home,
    Post,
    NewPost,
  },
  {
    initialRouteName: 'Home',
  },
);
