import Filters from './containers/Filters';
import Countries from './containers/Countries';
import CountryInfo from './containers/countryInfo';

import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";

export default function Index(){
    let { path, url } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Filters />
                <Countries />
            </Route>
            <Route path={`${path}:country`} component={CountryInfo}>
            </Route>
        </Switch>  
    );
}