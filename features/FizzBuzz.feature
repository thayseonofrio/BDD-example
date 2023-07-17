Feature: FizzBuzz 
    As a player, when I play FizzBuzz, I expect the corrct answer

    Scenario: FizzBuzz for numbers 1
        Given I play FizzBuzz with numbers "1"
        When I play the game
        Then I should get "1" as a result

    Scenario: FizzBuzz for rule 3
        Given I play FizzBuzz with numbers "3"
        When I play the game
        Then I should get "Fizz" as a result

    Scenario: FizzBuzz for rule 5
        Given I play FizzBuzz with numbers "5"
        When I play the game
        Then I should get "Buzz" as a result

    Scenario: FizzBuzz for rule 15
        Given I play FizzBuzz with numbers "15"
        When I play the game
        Then I should get "FizzBuzz" as a result

    Scenario: FizzBuzz for numbers 1, 2, 3, 4, 5, 15
        Given I play FizzBuzz with numbers "1,2,3,4,5,15"
        When I play the game
        Then I should get "1,2,Fizz,4,Buzz,FizzBuzz" as a result