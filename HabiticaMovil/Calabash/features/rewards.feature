Feature: Crear editar y borrar recompensas

   Scenario: Crear Recompensa
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Rewards"
    And I press "Rewards"
    And I click on screen 50% from the left and 90% from the top
    Then I wait
    And I enter text "Tiquetes a miami" into field with id "text_edit_text"
    And I enter text "Con todo incluido" into field with id "notes_edit_text"
    And I click on screen 10% from the left and 50% from the top
    And I click on screen 10% from the left and 50% from the top
    And I click on screen 10% from the left and 50% from the top
    Then I wait
    And I press "Create"
    Then I wait to see "Tiquetes a miami"
    Then I should see "Tiquetes a miami"
    Then I wait
    
  Scenario: Editar recompensa
    Given I press "Rewards"
    Then I wait
    And I wait to see "Tiquetes a miami"
    And I press "Tiquetes a miami" 
    And I clear input field with id "text_edit_text"
    And I enter text "Tiquetes a Bogotá" into field with id "text_edit_text"
    Then I wait
    And I click on screen 90% from the left and 50% from the top
    And I click on screen 90% from the left and 50% from the top
    And I click on screen 90% from the left and 50% from the top
    And I press "Save"    
    Then I wait
    Then I should see "Tiquetes a Bogota"
    Then I wait

  Scenario: Borrar recompensa
    Given I press "Rewards"
    And I wait
    And I wait to see "Tiquetes a Bogotá"
    Then I wait
    When I press "Tiquetes a Bogotá"
    Then I wait
    And I press "Delete"
    Then I wait
    And I press "Delete Task"
    Then I wait
    Then I should not see "Tiquetes a Bogota"
    Then I wait

  