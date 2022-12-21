import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js"

const {DataTypes} = Sequelize;

const Saldo = db.define('saldo',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    waktu:{
        type: DataTypes.DATE,
        defaultValue: Date.now,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    jumlahSaldo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    freezeTableName: true
});

Users.hasMany(Saldo);
Products.belongsTo(Users, {foreignKey: 'userId'});

export default Saldo;