Feature: Crear editar y borrar habitos

   Scenario: Crear habito
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I press "Habits"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "Ejercicio 2 horas" into field with id "text_edit_text"
    And I enter text "En la madrugada" into field with id "notes_edit_text"
    And I press "Hard"
    And I press "Weekly"
    Then I wait
    And I press "Create"
    Then I wait to see "Ejercicio 2 horas"
    Then I should see "Ejercicio 2 horas"
    Then I wait
    
  Scenario: Puntos positivos y negativos en los habitos
    When I press "Habits"
    Then I wait
    And I click on screen 5% from the left and 40% from the top
    And I click on screen 5% from the left and 40% from the top
    And I click on screen 5% from the left and 40% from the top
    Then I wait
    And I click on screen 95% from the left and 40% from the top
    Then I wait

  Scenario: Borrar habito
    When I press "Habits"
    And I wait
    And I wait to see "Ejercicio 2 horas"
    Then I wait
    When I press "Ejercicio 2 horas"
    Then I wait
    And I press "Delete"
    Then I wait
    And I press "Delete Task"
    Then I wait
    Then I should not see "Ejercicio 2 horas"
    Then I wait

    Scenario: Error borrando habito
    When I press "Habits"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "Ejercicio 2 horas" into field with id "text_edit_text"
    And I enter text "En la madrugada" into field with id "notes_edit_text"
    And I press "Hard"
    And I press "Weekly"
    Then I wait
    And I press "Create"
    And I wait to see "Ejercicio 2 horas"
    Then I wait
    When I press "Ejercicio 2 horas"
    Then I wait
    And I press "Delete"
    Then I wait
    And I press "Delete Task"
    Then I wait
    Then I should not see "Ejercicio 2 horas"
    Then I wait
    
    