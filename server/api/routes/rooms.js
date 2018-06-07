const express = require('express');
const db = require('../../../database/index');
const debug = require('debug')('app:*');

const router = express.Router();

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  id -= 1000 - 1;
  debug(`ID: ${id}`);

  db.queryAllDbTablesByRoomId(id, (error, results) => {
    if (error) {
      debug(error[0]);
    } else {
      debug(results);
      res.status(200).json({
        data: results,
      });
    }
  });
});

module.exports = router;
