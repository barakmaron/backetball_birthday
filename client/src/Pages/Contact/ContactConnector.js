import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contact from './Contact';
import { SubmitContactFormAction } from '../../redux/actions/ContactActions';
import { getFailed, getMessage, getSuccessful } from '../../redux/selectors/ViewSelector';

const mapStateToProps = (state, ownProps) => {
    const successful = getSuccessful(state);
    const failed = getFailed(state);
    const message = getMessage(state);
    return { ...ownProps, successful, failed, message };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({ SubmitContactFormAction }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Contact);