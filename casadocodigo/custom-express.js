
module.exports = () => {

    const express = require('express');
    
    const app = express();
    const bodyParser = require('body-parser');
    const load = require('express-load');
    const expressValidator = require('express-validator');

    require('dotenv').config()
    

    app.set('view engine', 'ejs');
    
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(expressValidator());
    app.use((req, res, next) => {
        console.log('URL: ', req.url)
        next()
    })
    
    load('routes')
        .then('infra')
        .into(app);

    require('./routes/produtos')(app);
    
    return app;
}