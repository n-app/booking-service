const mysql = require('mysql');
const debug = require('debug')('app:*');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'booking_service',
});

connection.connect((err) => {
  if (err) {
    debug(`error connecting to db: ${err}`);
    return;
  }
  debug('connected to database...');
});

const insertMockData = (sql, data) => {
  connection.query(sql, data);
};

module.exports = {
  connection,
  insertMockData,
};
