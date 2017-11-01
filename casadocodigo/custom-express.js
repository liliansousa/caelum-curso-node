const express = require('express');

module.exports = () => {
    const app = express();
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));

    require('./routes/produtos')(app);

    return app;
}