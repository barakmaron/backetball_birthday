import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CalendarActions from "./CalendarActions";
import { incrementMonthAction, decrementMonthAction } from "../../../redux/actions/CalendarActions";
import { getMonth, getYear } from "../../../redux/selectors/CalendarSelector";

const mapStateToProps = (state, ownProps) => {
    const month = getMonth(state);
    const year = getYear(state);
    return { 
        ...ownProps, 
        month, 
        year 
    };
};

const mapActionsToProps = dispatch => {
    return bindActionCreators({
        incrementMonthAction,
        decrementMonthAction
     }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(CalendarActions);