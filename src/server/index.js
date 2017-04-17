// @flow

import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

import routes from './routes';
import { STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import initSocket from './socket';

const app = express();
// flow-disable-next-line
const http = Server(app);
const io = socketIO(http);
initSocket(io);

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

routes(app);

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
  '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
