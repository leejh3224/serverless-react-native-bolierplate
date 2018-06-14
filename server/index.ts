import * as serverless from 'serverless-http'
import * as express from 'express'
import { Application, Request, Response } from 'express'

import api from './api'

const app: Application = express()

app.use('/v1', api)

module.exports.handler = serverless(app)
