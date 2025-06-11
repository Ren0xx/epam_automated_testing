@sorting
Feature: Sorting items

  Scenario: Specific item should be first in the list when sorting method is "Name (A-Z)"
    Given I am on the "home" page
    When I sort items by "Name (A-Z)"
    Then the "Adjustable Wrench" text should be visible
    And the "Adjustable Wrench" item should be "first" in the sorted items list

  Scenario: Specific item should be first in the list when sorting method is "Name (Z-A)"
    Given I am on the "home" page
    When I sort items by "Name (Z-A)"
    Then the "Wood Saw" text should be visible
    And the "Wood Saw" item should be "first" in the sorted items list
