const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
connectDB();

//set ejs as the templating engine
app.set('view engine', 'ejs');

//middleware to parse request body
app.use(express.urlencoded({ extended: true }));

//define route
app.use('/', taskRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

