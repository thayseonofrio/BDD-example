Feature: FizzBuzz 
  As a player, when I play FizzBuzz, I expect the correct answer

  Scenario: FizzBuzz for numbers 1
    Given I play FizzBuzz with numbers "1"
    When I play the game
    Then I should get "1" as a result

 Scenario: FizzBuzz for numbers 1, 2
    Given I play FizzBuzz with numbers "1,2"
    When I play the game
    Then I should get "1,2" as a result

 Scenario: FizzBuzz for numbers 1, 2, 3
    Given I play FizzBuzz with numbers "1,2,3"
    When I play the game
    Then I should get "1,2,Fizz" as a result
