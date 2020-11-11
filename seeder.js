const fs = require('fs');

// load environment variables

// load models

// connect to db

// read json files
const users = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
);

const activities = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/activities.json`, 'utf-8')
);

// import data into db
const importData = async () => {
	console.log('inside importData method');
	console.log(users);
};

// delete date from db
const deleteData = async () => {
	console.log('inside deleteData method');
};

// check for args
if (process.argv[2] === '-i') {
	//import data
	importData();
} else if (process.argv[2] === '-d') {
	//delete data
	deleteData();
}
