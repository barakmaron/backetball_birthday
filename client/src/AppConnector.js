import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFailed, getMessage, getSuccessful } from "./redux/selectors/ViewSelector";
import App from "./App";
import { InitErrorSuccessAction } from './redux/actions/ViewActions';

const mapStateToProps = (state, ownProps) => {
    const failed = getFailed(state);
    const successful = getSuccessful(state);
    const message = getMessage(state);
    return { ...ownProps, failed, successful, message };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({ InitErrorSuccessAction }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(App);