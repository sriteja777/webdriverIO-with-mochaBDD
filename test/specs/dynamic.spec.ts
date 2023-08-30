import DynamicPage from '../pageobjects/dynamic.page.ts'
import log4js from 'log4js'
import {log4jsAppender, BStackTestOpsLogger} from '@wdio/browserstack-service'
const {configure, getLogger} = log4js

configure({
    appenders: { bs_test_ops_logger: { type: log4jsAppender },
        console_logger: {type: "stdout"},
    },
    categories: { default: { appenders: ["bs_test_ops_logger", "console_logger"], level: "all" } },
})

import winston from 'winston'

const logConfiguration = {
    transports: [new BStackTestOpsLogger({}),
        new winston.transports.Console()],
    level: 'silly',
};
const loggerWinston = winston.createLogger(logConfiguration);


const logger4js = getLogger()
logger4js.level = 'all'

describe('dynamic loading', () =>  {
    it('should be an button on the page', async () =>  {
        // await DynamicPage.open()
        // await expect(DynamicPage.loadedPage).not.toBePresent()
        //
        // await DynamicPage.btnStart.click()
        // await DynamicPage.loadedPage.waitForExist({ timeout: 900000 })
        // await expect(DynamicPage.loadedPage).toBePresent()
        logger4js.info('some log')
        logger4js.info("before - 4js info - BStack - BStack - Homepage Basic Logging");
        logger4js.trace("before - 4js trace - BStack - BStack - Homepage Basic Logging");
        logger4js.debug("before - 4js debug - BStack - BStack - Homepage Basic Logging");
        logger4js.warn("before - 4js warn - BStack - BStack - Homepage Basic Logging");
        logger4js.error("before - 4js error - BStack - BStack - Homepage Basic Logging");
        logger4js.fatal("before - 4js fatal - BStack - BStack - Homepage Basic Logging");
        loggerWinston.info('before - winston info 1 - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('info', 'before - winston info 2- BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('debug', 'before - winston debug - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('verbose', 'before - winston verbose - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('silly', 'before - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('http', 'before - winston http - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('warn', 'before - winston silly - BStack - BStack - Homepage Basic Logging')
        loggerWinston.log('error', 'before - winston error - BStack - BStack - Homepage Basic Logging')

    })
})
