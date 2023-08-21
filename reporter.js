const reporter = require("cucumber-html-reporter")

const options = {
    theme: "bootstrap",
    jsonFile: "cucumber_report.json",
    output: "reports/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        "App version": "1.0.0",
        "Test Environment": "QA",
        Browser: 'Chrome 54.0',
        Platform: "Windows 10"
    }
}

reporter.generate(options)