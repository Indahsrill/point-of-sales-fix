import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import sequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import TransaksiRoute from "./routes/TransaksiRoute.js";
import PenjualanRoute from "./routes/PenjualanRoute.js"; 

dotenv.config();

const app = express();

const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

db.sync();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

//ini middleware
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);
app.use(TransaksiRoute);
app.use(PenjualanRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});