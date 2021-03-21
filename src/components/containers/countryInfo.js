import CountryInfo from './../CountryInfo';

import { connect } from 'react-redux';

function mapStateToProps(state, props){
    return {
        theme: state.theme,
        countriesList: state.countriesList,
    }
}

export default connect(mapStateToProps)(CountryInfo);