Feature: Login Feature

    As a Swag Labs user I want to be able to login to the application so that I can buy products

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        Then I am successfully logged in and redirected to the home page


