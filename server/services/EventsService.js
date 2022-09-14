import EventsDB from './storage/Events.js';
import moment from 'moment';
import Constants from '../Constants.js';

async function GetEvents(month, year) {
    try {
        const start_of_month = moment().month(month).year(year).startOf('month').format(Constants.DateStampFormat);
        const end_of_month = moment().month(month).year(year).endOf('month').format(Constants.DateStampFormat);
        return EventsDB.GetEventsByMonthRange(start_of_month, end_of_month);
    } catch (err) {
        throw err;
    }
}

async function AddEvent(date, email, full_name, phone_number) {
    try {
        return EventsDB.AddEvent(date, email, full_name, phone_number);
    } catch (err) {
        throw err;
    }
}

async function DeleteEvent(id) {
    try {
        return EventsDB.DeleteEvent(id);
    } catch (err) {
        throw err;
    }
}

const EventsService = {
    GetEvents,
    AddEvent,
    DeleteEvent
};

export default EventsService;