import dayjs from 'dayjs'
import pino, { TransportTargetOptions, stdTimeFunctions } from 'pino'
import { DEBUG } from '../config.js'

const startingTime = dayjs()

const targets: TransportTargetOptions[] = []

targets.push({
  target: 'pino/file',
  options: {
    destination: `./logs/${startingTime.format('YYYY-MM-DD_HHmmss')}.all.log`,
    mkdir: true,
  },
  level: 'info',
})

targets.push({
  target: 'pino/file',
  options: {
    destination: `./logs/${startingTime.format('YYYY-MM-DD_HHmmss')}.warn.log`,
    mkdir: true,
  },
  level: 'warn',
})

if (DEBUG)
  targets.push({
    target: 'pino-pretty',
    options: {
      colorize: true,
      destination: 1,
    },
    level: 'warn',
  })

export const logger = pino({
  transport: {
    targets,
  },
  base: {},
  timestamp: stdTimeFunctions.isoTime,
})
