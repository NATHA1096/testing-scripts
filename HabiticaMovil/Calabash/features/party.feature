Feature: Party

   Scenario: Crear Equipo
    Given I press "Skip"
    And I press "Login"
    And I enter text "jmauricio123" into field with id "username"
    And I enter text "1234567A@" into field with id "password"
    And I press "Login"
    Then I wait to see "Habits"
    And I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    Then I wait
    And I press "Create Party"
    Then I wait
    And I enter text "Mi equipo" into field with id "group_name_edittext"
    And I enter text "Descripcion de mi equipo" into field with id "group_description_edittext"
    And I press "Create"
    Then I wait
    Then I should see "Mi equipo"
    

  Scenario: Enviar mensaje al grupo
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    And I wait
    When I press "Chat"
    And I wait
    And I enter text "Enviando mensaje al grupo" into field with id "chatEditText"
    And I click on screen 97% from the left and 98% from the top
    Then I wait
    Then I should see "Enviando mensaje al grupo"
    Then I wait

  Scenario: Editar equipo
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    And I wait
    When I press the menu key
    And I press "Edit"
    Then I wait 
    And I enter text "nuevo equipo" into field with id "group_name_edittext"
    And I enter text "nueva descripcion" into field with id "group_description_edittext"
    And I press "Save"
    Then I wait 
    Then I should see "nuevo equipo"   
    Then I wait

  Scenario: Invitar amigos
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    And I wait
    When I press the menu key
    And I press "Invite Friends"
    When I click on screen 70% from the left and 15% from the top
    Then I wait 
    And I enter text "jmauriciopv@gmail.com" into field with id "emails"
    And I press "INVITE FRIENDS"
    Then I wait 
    Then I should see "Invite sent!"   
    Then I wait

  Scenario: Abandonar equipo
    When I click on screen 5% from the left and 10% from the top
    Then I wait
    And I press "Party"
    And I wait
    When I press the menu key
    And I press "Leave"
    Then I wait 
    And I press "Yes"
    Then I wait 
    Then I should see "Habits"   
    Then I wait