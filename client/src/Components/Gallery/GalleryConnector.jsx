import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Gallery from "./Gallery";
import { GetImagesAction } from "../../redux/actions/ImageActions";
import { getImages } from "../../redux/selectors/imagesSelector";

const mapStateToProps = (state, ownProps) => {
    const images = getImages(state);
    return { ...ownProps, images };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({ 
        GetImagesAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Gallery);