const express = require('express'),
    orderRoutes = require('./routes/orders'),
    // mongoConnect = require('./db/db_connect'), //intiate db
    errorHandler = require('./controllers/errorHandler');

const app = express(),
    port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
        console.error(err.stack)
    });

app.use('/orders', orderRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`server running on port ${port}`));