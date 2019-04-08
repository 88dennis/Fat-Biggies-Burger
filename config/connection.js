var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_DB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  afterConnection()
});

function afterConnection() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
  }
  
module.exports = connection;