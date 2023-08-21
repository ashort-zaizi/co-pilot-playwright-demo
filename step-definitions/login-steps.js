const { Given, When, Then, defineStep } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/login-page")

const loginPage = new LoginPage()


Given('I am on the login page', async function () {
    await loginPage.navigateToLoginScreen()
});

When('I enter valid credentials', async function () {
    await loginPage.submitLoginForm()
});

Then('I am successfully logged in and redirected to the home page', async function () {
    await loginPage.assertUserIsLoggedIn()
});

