Feature: Cambio de lenguaje

   Scenario: Cambiar a Español
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I click on screen 70% from the left and 10% from the top
    And I press "Language"
    And I wait
    And I press "Español"
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I click on screen 5% from the left and 10% from the top
    And I wait
    Then I should not see "Achievements"
    And I wait


