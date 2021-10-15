// Configuring the database
const dbConfig = require('../config/db_config.js');
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true },
    { useUnifiedTopology: true }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit(0);
    });


