import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transaksi = db.define('Transaksi', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, //field ini gaboleh null
        validate: {
            notEmpty: true //gaboleh empty
        }
    },
    kodeTransaksi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    waktu: {
        type: DataTypes.DATE,
        default: Date.now,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    statusTransaksi: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    total: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
},
{
    freezeTableName: true
});

export default Transaksi;