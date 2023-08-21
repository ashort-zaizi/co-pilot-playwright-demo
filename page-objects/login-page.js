class LoginPage {

  async navigateToLoginScreen() {
    await page.goto('https://www.saucedemo.com/v1/')
  }

  async submitLoginForm(username, password) {
    await page.fill('#user-name', username)
    await page.fill('#password', password)
    await page.click('#login-button')
  }

  async pause() {
    await page.waitForTimeout(3000)
  }

}
  
module.exports = { LoginPage }