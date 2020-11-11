const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//route files

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
