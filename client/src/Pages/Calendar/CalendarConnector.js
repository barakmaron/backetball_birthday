import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import CalendarPage from "./Calendar";
import { GetEventsAction, AddEventAction } from "../../redux/actions/CalendarActions";
import { getMonth } from "../../redux/selectors/CalendarSelector";

const mapStateToProps = (state, ownProps) => {
    const month = getMonth(state);
    return { ...ownProps, month };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({ 
        GetEventsAction,
        AddEventAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(CalendarPage);