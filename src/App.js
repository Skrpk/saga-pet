import React from 'react';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './App.css';
import store from './store';
import Layout from './components/Layout';
// import UsersList from './components/UsersList';

// const App = <Provider store={store}>
//   // <Router history={browserHistory}>
//   //   <Route path="/" component={App}>
//   //     <IndexRoute component={Layout} />
//   //     <Route path="sign-up" component={UsersList} />
//   //   </Route>
//   // </Router>
//   <Layout />
// </Provider>;

const App = () => (<Provider store={store}>
  <Layout />
</Provider>);

export default App;
