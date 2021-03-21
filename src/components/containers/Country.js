import Country from './../Country';

import { connect } from 'react-redux';

function mapStateToProps(state, props){
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Country);