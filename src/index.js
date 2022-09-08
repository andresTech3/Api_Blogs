const express = require("express");
const morgan = require('morgan')

const app = express();

//settings
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2 ) 

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./routers/routers'));
app.use(require('./routers/blogs'));

// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})

