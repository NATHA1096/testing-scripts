Feature: Crear finalizar y borrar tareas

   Scenario: Crear tarea
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I press "To-Dos"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "tarea1" into field with id "text_edit_text"
    And I enter text "Nota de tarea" into field with id "notes_edit_text"
    And I press "Trivial"
    Then I wait
    And I press "Create"
    Then I wait
    Then I should see "tarea1"
    Then I wait
    
  Scenario: Finalizar tarea
    When I press "To-Dos"
    Then I wait
    And I click on screen 5% from the left and 40% from the top
    Then I wait
    Then I should not see "tarea1"
    Then I wait

  Scenario: Borrar tarea
    When I press "To-Dos"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "tarea2" into field with id "text_edit_text"
    And I enter text "Nota de tarea" into field with id "notes_edit_text"
    And I press "Trivial"
    Then I wait
    And I press "Create"
    And I wait
    And I wait to see "tarea2"
    Then I wait
    When I press "tarea2"
    Then I wait
    And I press "Delete"
    Then I wait
    And I press "Delete Task"
    Then I wait
    Then I should not see "tarea2"
    Then I wait
    
