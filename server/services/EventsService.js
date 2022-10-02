import EventsDB from './storage/Events.js';
import moment from 'moment';
import Constants from '../Constants.js';
import SendMail, { mailOption } from './MailService.js';

async function GetEvents(month, year) {
    try {
        const start_of_month = moment().month(month).year(year).startOf('month').format(Constants.DateStampFormat);
        const end_of_month = moment().month(month).year(year).endOf('month').format(Constants.DateStampFormat);
        return await EventsDB.GetEventsByMonthRange(start_of_month, end_of_month);
    } catch (err) {
        throw err;
    }
}

async function AddEvent(date, email, full_name, phone_number) {
    try {
        const add_event = EventsDB.AddEvent(date, email, full_name, phone_number);
        const mail_options = mailOption(email, full_name, phone_number, date);
        const send_mail = SendMail(mail_options);
        const [event] = await Promise.all([add_event, send_mail]);
        return event;
    } catch (err) {
        throw err;
    }
}

async function DeleteEvent(id) {
    try {
        return await EventsDB.DeleteEvent(id);
    } catch (err) {
        throw err;
    }
}

async function GetEventInfo(event_info_id) {
    try {        
        return await EventsDB.GetEventInfo(event_info_id);
    } catch (err) {
        throw err;
    }
}

const EventsService = {
    GetEvents,
    AddEvent,
    DeleteEvent,
    GetEventInfo
};

export default EventsService;