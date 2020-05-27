Feature: Desafios

Scenario: Editar desafio sin equipo
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Challenges"
    And I click on screen 60% from the left and 40% from the top
    And I wait 
    And I press "Discover"
    And I wait 
    And I press "desafio1"
    And I wait 
    And I press the menu key
    And I press "Edit"
    And I clear input field with id "create_challenge_title"
    And I wait 
    And I enter text "titulo desafio" into field with id "create_challenge_title"
    And I wait 
    And I press "Add Habit"
    And I enter text "Ejercicio 2 horas" into field with id "text_edit_text"
    And I wait
    And I press "Create"
    And I press "Save"
    Then I should see "titulo desafio"
    And I wait

Scenario: Unirse a desafio
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Challenges"
    And I click on screen 60% from the left and 40% from the top
    And I wait 
    And I press "Discover"
    And I wait 
    And I press "desafio1"
    And I wait 
    And I press "Join"
    Then I should see "desafio1"
    And I wait

   Scenario: Crear desafio
    When I wait
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I press "Challenges"
    When I press the menu key
    And I press "Create Challenge"
    And I wait 
    And I enter text "titulo desafio" into field with id "create_challenge_title"
    Then I scroll "down" until I see "Add Habit"
    And I enter text "short name" into field with id "create_challenge_tag"
    And I wait
    Then I scroll "down" until I see "Add Habit"
    And I press "Add Habit"
    And I enter text "Ejercicio 2 horas" into field with id "text_edit_text"
    And I enter text "En la madrugada" into field with id "notes_edit_text"
    And I press "Hard"
    And I press "Weekly"
    Then I wait
    And I press "Create"
    Then I wait
    And I press "Save"
    Then I should see "titulo desafio"
    And I wait
    
  Scenario: Editar desafio
    When I wait
    When I click on screen 5% from the left and 10% from the top
    And I wait
    And I press "Challenges"
    And I wait
    And I press "desafio1"
    And I wait
    And I press the menu key
    And I press "Edit"
    And I clear input field with id "create_challenge_title"
    And I enter text "titulo desafio2" into field with id "create_challenge_title"
    And I wait 
    And I press "Save"
    Then I should see "titulo desafio2"
    And I wait

  Scenario: Terminar desafio
    When I wait
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I press "Challenges"
    And I press "desafio1"
    And I press "Leave"
    And I press "Yes"
    Then I should not see "desafio1"
    And I wait

  Scenario: Elegir ganador para desafio
    When I wait
    And I click on screen 5% from the left and 10% from the top
    And I wait
    And I press "Challenges"
    Then I should see "WINNER"
  
    
    