let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   
    directConnect : true,
  
    capabilities: {
        browserName: 'chrome'
    },
  
    specs: ['../Tests/AddCustomer.spec.js'], 
    suites: {
        smoke: ['../Tests/BankManagerSimple.spec.js','../Tests/demo.spec.js'],
        //run with protractor conf.js --suite=smoke
        regression: ['../Tests/*.spec.js'] //We may not have a control on which one to start first. regression has a wild card, *.spec.js which means run everything underneath Tests folder
        //run with protractor conf.js --suite=regression
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
            showstack: false
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../report/screenshots',
            preserveDirectory: false,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'CyberBank-Report.html'
        }).getJasmine2Reporter());
    },
        
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 30000,    
        print: function() {}    
    }
};