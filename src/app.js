const express = require('express');
let app = express();

function configureExpress() {
    app.use(express.static(__dirname + '/client'));
    app.use(express.static('./bower_components'));
    app.all('/', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    });
}

function configurePaths() {
    app.get('/test', (req, res) => {
        res.json({ val: 123, val_two: 'hello world1' });
    })
}

configureExpress();
configurePaths()

server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Express listening on port ${process.env.PORT || 3001}`);
})
