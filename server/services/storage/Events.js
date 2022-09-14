import { EventsModel, EventsInfoModel, sequelize } from '../../db/models/index.js';
import { Op } from 'sequelize';
import moment from 'moment';

async function GetEventsByMonthRange(start, end) {
    try {        
        return await EventsModel.findAll({
            where: {
                date: {
                    [Op.between]: [start, end]
                }
            }
        });
    } catch (err) {
        throw err;
    }
}

async function AddEvent(date, email, full_name, phone_number) {
    const transaction = await sequelize.transaction();
    try {
        const formatted_date = moment(date).toDate();
        const event_info = await InsertEventInfo(email, full_name, phone_number, transaction);
        const event = await InsertEvent(formatted_date, event_info.id, transaction);
        await transaction.commit();
        return event;
    } catch (err) {
        transaction.rollback();
        throw err;
    }
}

async function InsertEventInfo(email, full_name, phone_number, transaction) {
    return EventsInfoModel.create({
        Email: email,
        FullName: full_name,
        PhoneNumber: phone_number
    }, {
        transaction
    });
}

async function InsertEvent(date, event_info_id, transaction) {
    return EventsModel.create({
        Date: date,
        EventsInfoId: event_info_id
    }, {
        transaction
    });
}

async function DeleteEvent(id) {
    return EventsModel.destroy({
        where: {
            id: id
        }
    });
}

const EventsDB = {
    GetEventsByMonthRange,
    AddEvent,
    DeleteEvent
};

export default EventsDB;