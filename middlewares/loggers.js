import pino from 'pino';
import pinoLoggers from 'pino-http';
import {randomUUID} from 'node:crypto';

 export const logger = pinoLoggers({
  logger: pino(),
  genReqId: function (req, res) {
    if (req.id) return req.id
    let id = req.get('x-Request-id')
    if (id) return id
    id = randomUUID()
    res.header("X-Request-id", id)
    return id;
  }
})