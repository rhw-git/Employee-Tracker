const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11dluocRw5?421`',
  database: '/db/employee.db',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  afterConnection();
});
afterConnection = () => {
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};
