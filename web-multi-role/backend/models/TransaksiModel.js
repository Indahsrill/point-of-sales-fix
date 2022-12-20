import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Transaksi = db.define('Transaksi', {
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
        type: String,
        enum: ['Confirmed', 'Proccessing', 'Cancelled', 'Paid'],
        default: 'Proccessing',
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