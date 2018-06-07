const mysql = require('mysql');
const debug = require('debug')('app:*');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'booking_service',
});

connection.connect((error) => {
  if (error) {
    debug(`Error connecting to db, error code: ${error.code}`);
    return;
  }
  debug('connected to database...');
});

const insertIntoDB = (sql, values, callback) => {
  const bulkArr = [];
  bulkArr.push(values);
  connection.query(sql, bulkArr, (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  insertIntoDB,
};
