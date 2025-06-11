@search
Feature: Item search

  Scenario: Search phrase header should be shown when search bar is used
    Given I am on the "home" page
    When I enter "Washers" as search phrase
    And I click the search button
    Then the "Searched for: Washers" text should be visible

  Scenario: Search input should be cleared when search button is clicked
    Given I am on the "home" page
    When I enter "search" as search phrase
    And I click the search button
    Then the search input should be empty

  Scenario: Search input should be cleared when search clear button is clicked
    Given I am on the "home" page
    When I enter "search" as search phrase
    And I click the search input clear button
    Then the search input should be empty

