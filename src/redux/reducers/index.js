import { routerReducer } from 'react-router-redux';
import { combineReducers, createStore  } from 'redux';

import theme from './theme';
import countriesList from './list';
import listFilters from './listFilters';

export default createStore(
    combineReducers({
        theme,
        countriesList,
        listFilters,
        routing: routerReducer,
    }),
    
);