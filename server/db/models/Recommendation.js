'use strict';
import { Model } from "sequelize";

const Recommendation = (sequelize, DataTypes) => {
    class Recommendation extends Model {
        static associate(models) {

        }
    }

    Recommendation.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Image: {
            type: DataTypes.STRING
        },
        Name: {
            type: DataTypes.STRING
        },
        Text: {
            type: DataTypes.STRING
        },
        Rating: {
            type: DataTypes.INTEGER,
            validate: {
                max: 5,
                min: 1
            }
        }
    }, {
        sequelize,
        modelName: "Recommendation"
    });
    return Recommendation;
};

export default Recommendation;