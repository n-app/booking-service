const Chance = require('chance');
const Moment = require('moment');
const MomentRange = require('moment-range');
const db = require('../database/index.js');

const chance = new Chance();
const moment = MomentRange.extendMoment(Moment);
const calendarStart = moment('1990-01-01', 'YYYY-MM-DD');
const calendarEnd = moment('2030-01-01', 'YYYY-MM-DD');
