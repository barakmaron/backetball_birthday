'use strict';
import { Model } from 'sequelize';

const EventsInfo = (sequelize, DataTypes) => {
    class EventsInfo extends Model {
        static associations(models) {
            EventsInfo.belongsTo(models.Events);
        }
    }

    EventsInfo.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        FullName: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        },
        PhoneNumber: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: "EventsInfo"
    });
    return EventsInfo;
};

export default EventsInfo;
