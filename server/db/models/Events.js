'use strict';
import { Model } from 'sequelize';

const Events = (sequelize, DataTypes) => {
    class Events extends Model {
        static associations(models) {
            Events.hasOne(models.EventsInfo);
        }
    }

    Events.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Date: {
            type: DataTypes.DATEONLY
        }
    }, {
        sequelize,
        modelName: "Events"
    });
    return Events;
};

export default Events;