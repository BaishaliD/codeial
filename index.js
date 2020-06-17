const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/',require('./routes/index'))

//ser up the view engine
app.set('view engine','ejs');
app.set('views','./views');



//run the server on port 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }

    console.log(`Server running on port: ${port}`);
})