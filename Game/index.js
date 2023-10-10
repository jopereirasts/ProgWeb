const express = require('express');
const router = require('./src/router/router');

// import handlebars from 'express-handlebars';
const handlebars = require("express-handlebars");
//erro quando importo o handlebars
const morgan = require('morgan');

const app = express()
const PORT = 4455;

app.use(router)
app.use(morgan("combined"));

app.engine("handlebars",handlebars.engine());
app.set("view engine","handlebars");
app.set("views", `${__dirname}/src/views`);

app.listen(PORT, ()=>{
    console.log(`Escutando na porta ${PORT}!`);
});
