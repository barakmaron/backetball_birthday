'use strict';
import { Model } from "sequelize";

const Images = (sequelize, DataTypes) => {
    class Images extends Model {
        static associate(models) {

        }
    }

    Images.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        Location: {
            type: DataTypes.STRING
        },
        Alt: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: "Images"
    });
    return Images;
};

export default Images;