import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UploadImage from "./UploadImage";
import { UploadImageAction } from '../../redux/actions/ImageActions';

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        UploadImageAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(UploadImage);