import http from "http";
import app from  "./app.js";

const port = 5000;
const server = http.createServer(app);

server.listen(port, () => console.info('Reservation App running on port ' +  port));