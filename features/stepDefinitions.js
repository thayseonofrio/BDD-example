const assert = require("assert")
const {Given, When, Then} = require("@cucumber/cucumber")
const {getFizzBuzzResult} = require("../index")

const fizzBuzzPlay = {
    input: "",
    response: ""
}

Given("I play FizzBuzz with numbers {string}", (input) => {
    fizzBuzzPlay.input = input
})

When("I play the game", () => {
    fizzBuzzPlay.response = getFizzBuzzResult(fizzBuzzPlay.input)
})

Then("I should get {string} as a result", (expectedAnswer) => {
    assert.deepStrictEqual(fizzBuzzPlay.response, expectedAnswer)
})