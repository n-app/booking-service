const http = require('http');
const app = require('./index');

const PORT = process.env.PORT || 3004;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
