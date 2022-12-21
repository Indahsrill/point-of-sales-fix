import { Sequelize } from "sequelize";

const db = new Sequelize('point_of_sales', 'root', '', {
    host:  "127.0.0.1",
    dialect: "mysql"
});

export default db;