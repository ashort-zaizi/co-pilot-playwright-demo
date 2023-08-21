class LoginPage {
    get usernameInput() { return browser.element('#username'); }
    get passwordInput() { return browser.element('#password'); }
    get submitButton() { return browser.element('#login'); }
  
  
    async navigateToLoginScreen() {
      await page.goto('https://www.saucedemo.com/v1/')
    }
  
    async submitLoginForm() {
      await page.fill('#user-name', 'standard_user')
      await page.fill('#password', 'secret_sauce')
      await page.click('#login-button')
    }
  
    async assertUserIsLoggedIn() {
      await page.waitForSelector('.inventory_list')
    }
  }
  
  module.exports = { LoginPage }