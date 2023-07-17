const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { getFizzBuzzResult } = require("../index");

 const fizzBuzzPlay = {
    input: "",
    response: ""
 }

Given("I play FizzBuzz with numbers {string}", function (input) {
    fizzBuzzPlay.input = input
});

When("I play the game", function () {
  fizzBuzzPlay.response = getFizzBuzzResult(fizzBuzzPlay.input)
});

Then("I should get {string} as a result", function (expectedAnswer) {
  assert.deepStrictEqual(fizzBuzzPlay.response, expectedAnswer)
});
