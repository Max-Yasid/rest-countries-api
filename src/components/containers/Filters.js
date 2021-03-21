import Filters from './../filters';

import { connect } from 'react-redux';
import * as actionsList from './../../redux/actions';

function mapStateToProps(state, props) { 
    return ({
        theme: state.theme,
        filters: state.listFilters,
    });
 };

 function mapDispatchToProps(dispatch, props) {
    const actions = {
      filtContryListByName: (countryName) => dispatch(actionsList.nameCountryFilter(countryName)),
      filtCountryListByContinent: (continent) => dispatch(actionsList.countryFilterByContinent(continent)),
    };
    return { actions };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Filters);