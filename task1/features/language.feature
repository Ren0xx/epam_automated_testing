@language
Feature: Language change

  Scenario: Language change to "ES" should change sort header to spanish
    Given I am on the "main" page
    When I change the language to "ES"
    Then the "Ordenar" text should be visible
    And the "Sort" text should not be visible
