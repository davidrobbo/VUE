var mysql = require("mysql");
var dbDetails = require("./db-details.js");

module.exports = mysql.createConnection({
					host: dbDetails.host,
					user: dbDetails.user,
					password: dbDetails.password,
					database: dbDetails.database
				});