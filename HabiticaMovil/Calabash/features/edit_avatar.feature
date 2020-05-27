Feature: Editar avatar

  Scenario: Cambio de camiseta
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Avatar"
    Then I wait
    And I press "Shirt"
    Then I wait
    And I click on screen 20% from the left and 60% from the top
    Then I wait
    Then I go back
    And I go back
    Then I should see "Habits"
    Then I wait
    
   Scenario: Cambio de color de cabello
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Avatar"
    And I wait
    Then I scroll "down" until I see "Color"
    Then I wait
    And I press "Color"
    Then I wait
    And I click on screen 20% from the left and 40% from the top
    Then I wait
    And I go back
    And I go back
    Then I should see "Habits"
    Then I wait
    
