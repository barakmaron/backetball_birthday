import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getLoggedIn } from '../../../redux/selectors/UserSelector';
import Event from "./Event";

const mapStateToProps = (state, ownProps) => {
    const logged_in = getLoggedIn(state);
    return { ...ownProps, logged_in };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({ }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Event);