@auth
Feature: Login

  Scenario: Login page should show "email address is required" error when email input is missing
    Given I am on the "login" page
    When I enter "password" as password
    And I click the login button
    Then the error message should be "Email is required"

  Scenario: Login page should show "password is required" error when password input is missing
    Given I am on the "login" page
    When I enter "email" as email
    And I click the login button
    Then the error message should be "Password is required"