const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//route files
const projects = require('./routes/projects');
const activities = require('./routes/activities');
// const auth;

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/projects', projects);
// app.use('/api/v1/activities', activities);
// app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
