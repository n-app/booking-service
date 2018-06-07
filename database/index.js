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

/*
listings
owners
reviews
bookings
*/

const queryListingInfoByRoomId = (id, callback) => {
  const idWrap = [];
  idWrap.push(id);
  connection.query('SELECT * FROM listings WHERE id = ?', idWrap, (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      debug(rows[0]);
      callback(null, rows);
    }
  });
};

const queryOwnerInfoByRoomId = (id, callback) => {
  const idWrap = [];
  idWrap.push(id);
  connection.query('SELECT * FROM owners WHERE id = ?', idWrap, (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      debug(rows[0]);
      callback(null, rows);
    }
  });
};

const queryListingReviewsByRoomId = (id, callback) => {
  const idWrap = [];
  idWrap.push(id);
  connection.query('SELECT COUNT(*) as totalReviews, SUM(rating) as starSum FROM reviews WHERE listing_id = ?', idWrap, (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      debug(rows[0]);
      callback(null, rows);
    }
  });
};

const queryBookingsByRoomId = (id, callback) => {
  const idWrap = [];
  idWrap.push(id);
  connection.query('SELECT * FROM bookings WHERE listing_id = ?', idWrap, (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      debug(rows[0]);
      callback(null, rows);
    }
  });
};

//function --> if there is an error, send partial retrieval of data?

const trackQueryHelper = (err, data, recordObj, queriesCompleted)

const queryAllDbTablesByRoomId = (id, callback) => {
  let queriesComplete = 0;
  const roomRecords = {};

  const trackQueryHelper

  //call each of our query helper functions,
  //their callbacks will be another helper function, that keeps track of completed queries,
};

module.exports = {
  connection,
  insertIntoDB,
  queryBookingsByRoomId,
};
