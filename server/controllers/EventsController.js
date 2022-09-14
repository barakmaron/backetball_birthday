import EventsService from '../services/EventsService.js';

async function GetEvents(req, res) {
    try {
        const { month, year } = req.params;
        const events = await EventsService.GetEvents(month, year);
        return res.status(200).json({
            events
        });
    } catch (err) {
        throw err;
    }
}

async function AddEvent(req, res) {
    try {
        const { date } = req.params;
        const { email, full_name, phone_number } = req.body;
        const add_event = await EventsService.AddEvent(date, email, full_name, phone_number);
        return res.status(200).json({
            event: add_event
        });
    } catch (err) {
        throw err;
    }
}

async function DeleteEvent(req, res) {
    try {
        const { id } = req.params;
        await EventsService.DeleteEvent(id);
        return res.status(200).json({});
    } catch (err) {
        throw err;
    }
}

const EventsController = {
    GetEvents,
    AddEvent,
    DeleteEvent
};

export default EventsController;