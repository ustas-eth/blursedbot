import dayjs from 'dayjs'
import pino, { TransportTargetOptions } from 'pino'
import { DEBUG } from '../config.js'

const startingTime = dayjs()

const targets: TransportTargetOptions[] = []

targets.push({
  target: 'pino/file',
  options: {
    destination: `./logs/${startingTime.format('YYYY-MM-DD_HHmmss')}.log`,
    mkdir: true,
  },
  level: 'info',
})

if (DEBUG)
  targets.push({
    target: 'pino-pretty',
    options: {
      colorize: true,
      destination: 1,
    },
    level: 'info',
  })

export const logger = pino({
  transport: {
    targets,
  },
})
