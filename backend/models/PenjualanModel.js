import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Products from "../models/ProductModel.js"
// import Transaksi from "../models/TransaksiModel.js";


const {DataTypes} = Sequelize;
const Penjualan = db.define('penjualan', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    namaCustomer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    hargaSatuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    diskon: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
        },
    },
    totalHarga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
},{
    freezeTableName: true, 
    }
);

Products.hasMany(Penjualan);
Penjualan.belongsTo(Products, { foreignKey: 'productId' });

// Transaksi.hasMany(Penjualan);
// Penjualan.belongsTo(Transaksi, { foreignKey: 'transaksiId' });

export default Penjualan;

