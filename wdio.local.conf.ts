import { config as sharedConfig } from './wdio.shared.conf.ts'

// @ts-expect-error
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    user: 'sritejasugoor_y15tfc',
    key: 'UkxzxSTEVLxddrG3tSdM',
    services: [
        'chromedriver',
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                //user: "<obs-username>",
                //key: "<obs-access-key>",
                projectName: "Test Observability Samples",
                buildName: "temp-wdio-mocha",
                buildTag: ['perf', 'wdio']
            },
            browserstackLocal: false
        }]
    ],
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: false
            }
        }]
    }
}
