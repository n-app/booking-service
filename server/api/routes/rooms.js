const express = require('express');
const db = require('../../../database/index');
const debug = require('debug')('app:*');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  id -= 1000 - 1;
  debug(`ID: ${id}`)

  db.queryBookingsByRoomId(id, (error, results) => {
    if (error) {
      debug(error);
    } else {
      debug(results);
      res.status(200).json({
        data: results,
      });
    }
  });

  //make call to db.queryRoomInfoById

  // debug(`GET room id: ${id}`);
  // res.status(200).json({
  //   message: `room ${id} fetched`,
  // });
});

module.exports = router;
