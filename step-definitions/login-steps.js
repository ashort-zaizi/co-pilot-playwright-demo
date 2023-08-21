const { Given, When, Then, defineStep } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")
const { HomePage } = require("../page-objects/home-page")

const loginPage = new LoginPage()
const homePage = new HomePage()


Given('I am on the login page', async function () {
    await loginPage.navigateToLoginScreen()
});

When('I enter valid credentials', async function () {
    await loginPage.submitLoginForm('standard_user', 'secret_sauce')
});

When(/^I enter username "([^"]*)" and password "([^"]*)"$/, async function (username, password) {
    await loginPage.submitLoginForm(username, password)
});

Then('I am successfully logged in and redirected to the home page', async function () {
    await homePage.assertUserIsLoggedIn()
});

Then('I wait for 3 seconds', async function () {
    loginPage.pause()
});

