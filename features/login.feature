Feature: Login Feature

    As a Swag Labs user I want to be able to login to the application so that I can buy products

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I am successfully logged in and redirected to the home page

    Scenario Outline: Login with invalid credentials
        Given I am on the login page
        When I enter username "<username>" and password "<password>"
        Then I wait for 3 seconds

        Examples:
            | username          | password          |
            | standard_user     | invalid_password  |
            | invalid_username  | secret_sauce      |
            | invalid_username  | invalid_password  |
