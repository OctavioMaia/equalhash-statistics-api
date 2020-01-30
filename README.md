# Front-End Statistics for the EqualHash Mining Pool

Frontend and statistics component for the EqualHash mining pool.

This is an ember application, which can be hosted on any simple webserver.
The application static pages can be placed in any Content delivery network for faster access.

### **Features**

**This pool is reegineered from sammy007 open-ethereum-pool for efficiency and for better payment algorithm. This software is functional and tested and implemented in big Mining farms. Testing and bug submissions are still welcome!**

*	Support for HTTP, SSL, Stratum, Stratum+SSL mining
*	Detailed block stats with luck percentage and full reward
*	Failover node instances: high availability built in (Any number of full nodes can be added to the configurations)
*	Modern beautiful Ember.js frontend for Individual coin statistics vs consolidated coin statistics
*	Separate stats for workers: can highlight timed-out workers so miners can perform maintenance of rigs
*	JSON-API for statistics, (Looking for contributor to build app for the pool)
*	Dynamic PPLNS block reward (*New)

## **Prerequisites**

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## **Installation**

* `git clone -b <branch> https://github.com/OctavioMaia/equalhash-statistics-api.git`
* change into the new directory
* `npm install`
* `bower install`
* `sudo chmod +x build.sh`
* `./build.sh`

Copy the build files to your webserver or CDN.

## **Running / Development**

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### **Code Generators**

Make use of the many generators for code, try `ember help generate` for more details

### **Running Tests**

* `ember test`
* `ember test --server`

### **Building**

* `ember build` (development)
* `ember build --environment production` (production)



### **Configuration Documentation**

Configuration is actually simple, just read it twice and think twice before changing defaults.

```javascript
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
            ApiUrl: '//equalhash.pt/',

            // HTTP mining endpoint
            HttpHost: 'equalhash.pt',
            HttpPort: 40002,

            // Stratum mining endpoint
            StratumHost: 'equalhash.pt',
            StratumPort: 9009,

            // Stratum SSL mining endpoint
            StratumHost1: 'equalhash.pt',
            StratumPort1: 8008,

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
            WebsiteName: 'equalhash.pt',

            //Coin Bases Settings
            ChainAddress : 'https://etcblockexplorer.com/addr/',
	        TransactionAddress : 'https://minergate.com/blockchain/etc/transaction/',
            UncleAddress : 'https://minergate.com/blockchain/etc/block/',
            BlockAddress : 'https://minergate.com/blockchain/etc/block/',

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

    ENV.contentSecurityPolicy = {};
    return ENV;
};
```
## **Further Reading / Useful Links**

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

