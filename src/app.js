const express = require('express');
require('./db/connection');
const router = require('../src/routers/menrouters')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`)
})