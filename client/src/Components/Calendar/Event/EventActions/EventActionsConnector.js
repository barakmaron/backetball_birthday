import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EventActions from "./EventActions";
import { DeleteEventAction, GetEventAction } from "../../../../redux/actions/CalendarActions";

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({ 
        DeleteEventAction,
        GetEventAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(EventActions);