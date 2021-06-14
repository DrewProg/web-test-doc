require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db.config');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const models = require('./models/models');
const router = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const errorHandler = require('./middlewares/ErrorHandlingMiddleware');

let corsOptions = {
    origin: ['http://localhost:8080', 'http://localhost:3000'],
    credentials: true
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // set port, listen for requests
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();