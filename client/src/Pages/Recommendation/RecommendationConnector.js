import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Recommendation from './Recommendation';
import { AddRecommendationAction } from '../../redux/actions/RecommendationActions';

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        AddRecommendationAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Recommendation);