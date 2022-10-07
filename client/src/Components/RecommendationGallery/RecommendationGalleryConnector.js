import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecommendationGallery from './RecommendationGallery';
import { GetRecommendationsAction } from '../../redux/actions/RecommendationActions';
import { getRecommendations } from '../../redux/selectors/RecommendationSelector';

const mapStateToProps = (state, ownProps) => {
    const recommendations = getRecommendations(state);
    return { ...ownProps, recommendations };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({ GetRecommendationsAction }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(RecommendationGallery);