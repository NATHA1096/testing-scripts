Feature: Quest

  Scenario: Crea una nueva mision para el equipo
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    And I wait
    When I press "Start a new Quest"
    And I wait
    And I click on screen 50% from the left and 50% from the top
    When I press "Invite party"
    Then I wait
    Then I should see "Quest"
    Then I wait

   Scenario: Abandonar mision 
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I press "Party"
    And I wait
    And I click on screen 90% from the left and 55% from the top   
    And I wait
    Then I scroll "down" until I see "Abort Quest"
    And I wait
    Then I should see "Abort Quest"
    And I press "Abort Quest"
    And I wait
    And I press "Yes"
    And I wait
    Then I should not see "Abort Quest"
    And I wait
