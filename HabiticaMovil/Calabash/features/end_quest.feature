Feature: Quest

   Scenario: Crear Equipo
    Given I press "Skip"
    And I press "Login"
    #element_is_not_hidden("* id:'username'")
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 5% from the left and 10% from the top
    And I press "Party"
    And I wait
    And I click on screen 50% from the left and 40% from the top   
    And I wait
    Then I scroll up
    And I wait
