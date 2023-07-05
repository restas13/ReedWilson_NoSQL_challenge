const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = poroces.cwd();

const PORT = 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`server running on port ${port}`)
    });
});