import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BlurImage from "./BlurImage";
import { DeleteImageAction, EditAltAction } from "../../../redux/actions/ImageActions";

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        DeleteImageAction,
        EditAltAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(BlurImage);