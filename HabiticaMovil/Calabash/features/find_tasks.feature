Feature: Encontrar tareas

   Scenario: buscar tarea que existe
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 70% from the left and 10% from the top
    Then I wait
    Then I enter text "tarea1" into field with id "search_src_text" 
    And I press enter
    Then I wait
    Then I should see "tarea1"
    
 
    