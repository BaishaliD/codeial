const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


//use static files
app.use(express.static('./assets'));

//use express-ejs-layouts
app.use(expressLayouts);

//extract style ans scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/',require('./routes/index'))

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');



//run the server on port 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`Server running on port: ${port}`);
})