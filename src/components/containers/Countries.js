import Countries from './../countries';

import { connect } from 'react-redux';

function mapStateToProps(state, props){
    return {
        theme: state.theme,
        countriesList: state.countriesList,
        filters: state.listFilters,
    }
}

export default connect(mapStateToProps)(Countries);