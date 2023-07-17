
const isMultipleOfThree = (number) => number % 3 === 0

const isMultipleOfFive = (number) => number % 5 === 0


const getFizzBuzzResult = (input) => {
    const items = input.split(",")
    const result = items.map(item => {
        const transformedItem = Number(item)
        if ((isMultipleOfThree(transformedItem) && isMultipleOfFive(transformedItem))) {
            return "FizzBuzz";
        }
        if (isMultipleOfThree(transformedItem)) {
            return "Fizz"
        }
        if (isMultipleOfFive(transformedItem)) {
            return "Buzz"
        }
        return transformedItem
    })
    return result.toString()
}

module.exports = {getFizzBuzzResult}