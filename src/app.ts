import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import lusca from 'lusca';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import bluebird from 'bluebird';


// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT);

const apiRouter = express.Router();

apiRouter.get('/', (_, res) => {
  res.json({
    data: null,
    message: 'Hooray! Welcome to iitdmarket api!',
  });
});

export default app;
