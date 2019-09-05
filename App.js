import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createAppContainer } from "react-navigation";
import ReduxThunk from 'redux-thunk';
import reducers from "./src/reducers/index";
import Routes from "./src/routes/index";
import promise from 'redux-promise';
let Navigation = createAppContainer(Routes);

export default class App extends React.Component {
  render() {
	const store = createStore(reducers, {} ,applyMiddleware(ReduxThunk,promise) );
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
