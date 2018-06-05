const express = require('express');
const startupDebugger = require('debug')('app:startup');
const morgan = require('morgan');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const roomRoutes = require('./api/routes/rooms');

const app = express();

if (app.get('env') === 'development') {
  app.use(morgan('dev'));
  startupDebugger('morgan enabled...');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handle cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

//serve home page for service '/'
app.use(express.static(path.join(__dirname, '../public')));

//handle /room and /checkout routes
app.use('/rooms', roomRoutes);

//Error handler for routes that go past our defined endpoints
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 3004;
const server = http.createServer(app);
server.listen(PORT, () => startupDebugger(`listening on port ${PORT}...`));
