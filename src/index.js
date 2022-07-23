import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
const path = require('path');

import initWebRoutes from './route/web';
require('dotenv').config();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

viewEngine(app);
initWebRoutes(app);
// let port =  ;
// app.listen(8081, () => {
//     console.log("Backend Nodejs is runing on the port : " + 8081)
// })


