const express = require('express');

module.exports = () => {
    const app = express();
    const bodyParser = require('body-parser');
    const load = require('express-load');

    app.set('view engine', 'ejs');
    
    
    load('routes')
        .then('infra')
        .into(app);

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}))

    require('./routes/produtos')(app);
    
    return app;
}