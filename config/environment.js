/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'open-ethereum-pool',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // API host and port
            ApiUrl: '//equalhash.dynu.net/',

            // HTTP mining endpoint
            HttpHost: 'equalhash.dynu.net',
            HttpPort: 40002,

            // Stratum mining endpoint
            StratumHost: 'equalhash.dynu.net',
            StratumPort: 9009,

            StratumHost1: '',
            StratumPort1: 9009,

            NicehashHost: '',
            NicehashPost: 40004,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum Classic',
            CoinShortName: 'ETC',
            PaymentText: 'every hour',
            SupportMail: '',
            SupportHelpdesk: '',
            WebsiteName: 'equalhash.dynu.net',

            //Coin Bases Settings
            ChainAddress : 'https://blockscout.com/etc/mainnet/address/',
	        TransactionAddress : 'https://blockscout.com/etc/mainnet/tx/',
            UncleAddress : 'https://blockscout.com/etc/mainnet/blocks/',
            BlockAddress : 'https://blockscout.com/etc/mainnet/blocks/',

            //Twitter Parameter
            TwitterURL: '',
            TwitterHash: '',


            // For network hashrate (change for your favourite fork)
            BlockTime: 14
        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.ApiUrl = 'https://etc.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};
