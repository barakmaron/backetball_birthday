import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BlurImage from "./BlurImage";
import { DeleteImageAction, EditAltAction } from "../../../redux/actions/ImageActions";
import { getLoggedIn } from '../../../redux/selectors/UserSelector';

const mapStateToProps = (state, ownProps) => {
    const logged_in = getLoggedIn(state);
    return { ...ownProps, logged_in };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        DeleteImageAction,
        EditAltAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(BlurImage);