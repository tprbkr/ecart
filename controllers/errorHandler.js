const errorHandler = (err, req, res, next) => {
    if (!res.headersSent) {
        res.status(err.statusCode || 500).send({ error: err.message || 'Internal Server Error' });
    }
}

module.exports = errorHandler;