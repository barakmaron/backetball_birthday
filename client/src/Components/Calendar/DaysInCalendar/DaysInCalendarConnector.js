import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DaysInCalendar from "./DaysInCalendar";
import { getMonth, getYear, getEvents } from "../../../redux/selectors/CalendarSelector";

const mapStateToProps = (state, ownProps) => {
    const month  = getMonth(state);
    const year = getYear(state);
    const events = getEvents(state);
    return { 
        ...ownProps,
        month,
        year,
        events
    };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({  }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(DaysInCalendar);