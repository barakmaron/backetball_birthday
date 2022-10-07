import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLoggedIn } from '../../../redux/selectors/UserSelector';
import RecommendationActions from './RecommendationActions';
import { DeleteRecommendationAction } from '../../../redux/actions/RecommendationActions';

const mapStateToProps = (state, ownProps) => {
    const logged_in = getLoggedIn(state);
    return { ...ownProps, logged_in };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        DeleteRecommendationAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(RecommendationActions);