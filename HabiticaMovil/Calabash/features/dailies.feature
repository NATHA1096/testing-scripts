Feature: Crear editar y borrar tareas diarias

   Scenario: Crear tarea diaria
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Dailies"
    And I press "Dailies"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "Montar bicicleta>" into field with id "text_edit_text"
    And I enter text "En la mañana" into field with id "notes_edit_text"
    And I press "Medium"
    Then I wait
    And I press "Create"
    Then I wait
    Then I should see "Montar bicicleta"
    Then I wait
    
  Scenario: Editar Tarea diaria
    When I press "Montar bicicleta"
    And I clear input field with id "text_edit_text"
    And I enter text "Trotar" into field with id "text_edit_text"
    Then I wait
    And I press "Hard"
    And I press "Save"
    Then I wait
    Then I should see "Trotar"
    Then I wait

  Scenario: Borrar tarea diaria
    When I press "Dailies"
    And I wait
    And I wait to see "Montar bicicleta"
    Then I wait
    When I press "Montar bicicleta"
    Then I wait
    And I press "Delete"
    Then I wait
    And I press "Delete Task"
    Then I wait
    Then I should not see "Montar bicicleta"
    Then I wait

    