import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import Products from "../models/ProductModel.js";
// import Transaksi from "../models/TransaksiModel.js";


const {DataTypes} = Sequelize;
const Penjualan = db.define('penjualan', {
    produkId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    transaksiId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
},{
    freezeTableName: true, 
    }
);

// Products.hasMany(Penjualan);
// Penjualan.belongsTo(Products, { foreignKey: 'produkId' });

// Transaksi.hasMany(Penjualan);
// Penjualan.belongsTo(Transaksi, { foreignKey: 'transaksiId' });

export default Penjualan;

