const express = require('express');
let app = express();

function configureExpress() {
    app.use(express.static(__dirname + '/client'));
    app.use(express.static('./bower_components'));
    // Allow CORS
    app.all('/', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    });
}

// Set up mock api
app.get('/test', (req, res) => {
    res.status(200).send('Test api successfull.');
})

configureExpress();
configurePaths()

server = app.listen(process.env.PORT || 3001, () => {
    console.log(`Express listening on port ${process.env.PORT || 3001}`);
})
