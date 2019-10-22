let express     = require('express'),
    parser      = require('body-parser'),
    path        = require('path');

PORT="3030"
// Instanciate app
let app = express()

// load parser
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));


require('./server/config/database.js');
require('./server/config/routes.js')(app);


// App.listen
app.listen(PORT, function(){
    console.log("Rippin it up on port: "+PORT)
})
