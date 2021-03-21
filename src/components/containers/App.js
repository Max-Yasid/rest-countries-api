import App from './../../App';

import { connect } from 'react-redux';
import * as ListActions from './../../redux/actions/index';

function mapDispatchToProps(dispatch, props){
    const actions = {
        setOrUpdateList: (countriesList) => dispatch(ListActions.setCountryList(countriesList)),
    };
    return { actions }
}

export default connect(null, mapDispatchToProps)(App);