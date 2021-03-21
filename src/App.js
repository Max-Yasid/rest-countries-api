import Header from './components/containers/header';
import Index from './components/index.js';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory }  from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/reducers/index';

function App({ actions }) {
  const history = syncHistoryWithStore(createBrowserHistory(), store);
  document.body.style.overflowX = "hidden";
  fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(countries => {
      actions.setOrUpdateList(countries)
    });
  return (
    <Router history={history}>
      <Header />
        <Route exact path="" component={Index}>
        </Route>
    </Router>
  );
}

export default App;
