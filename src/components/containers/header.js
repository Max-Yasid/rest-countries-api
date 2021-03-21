import Header from './../common/header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as changeTheme from './../../redux/actions/index';

function mapStateToProps(state, props) { 
    return ({
    theme: state.theme,
    });
 };

 function mapDispatchToProps(dispatch, props) {
    const actions = {
      changeToDarkMode: bindActionCreators(changeTheme.switchToDarkMode, dispatch),
      changeToLightMode: bindActionCreators(changeTheme.switchToLightMode, dispatch),
    };
    return { actions };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Header);