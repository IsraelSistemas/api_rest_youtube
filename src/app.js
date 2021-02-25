const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Require routes
const demoRouter = require('./routes/demo.routes');

// App variables
app.set('port', 4000);

// App middlewares
app.use(bodyParser.json());

// App Routes
app.use('/api', demoRouter);

// Init server
const startServer = () => {
    app.listen(app.get('port'), () => {
        console.log(`El servidor esta escuchando el puerto: ${app.get('port')}`);
    });
}

module.exports = {
    startServer
};
