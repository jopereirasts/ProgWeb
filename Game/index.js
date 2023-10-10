const express = require('express');
const router = require('./src/router/router');
const handlebars = require("express-handlebars");

const morgan = require('morgan');

const app = express()
const PORT = 4455;

app.use(router)
app.use("/img", express.static(`${__dirname}/public/img`)); 
app.use(morgan("combined"));

app.engine("handlebars",handlebars.engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout: 'main',
}));
app.set("view engine","handlebars");
app.set("views", `${__dirname}/src/views`);

app.listen(PORT, ()=>{
    console.log(`Escutando na porta ${PORT}!`);
});
