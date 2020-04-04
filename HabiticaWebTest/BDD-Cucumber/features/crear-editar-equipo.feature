Feature: Create and edit a party into Habitica
    As an user I want to create and edit a party within Habitica website

Scenario: Create a party successfully

    Given I login into Habitica website
    When I open the Party tab
    And I try to create a party
    Then I expect to see the party created

Scenario: Not allowed to edit party when changing the name

    Given I go to the party created
    When I try to edit it
    And I change the name
    Then I expect to see the button disabled

Scenario: Allowed to edit party when changing the description

    Given I go to the party created
    When I try to edit it
    And I write any description like
    Then I expect to see the description added to the party

    Examples:
      | description         | 
      | sfsdfdsvscsdvdsvsd  |
      | Description test    |
      | ***                 |