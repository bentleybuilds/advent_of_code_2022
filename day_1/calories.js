const fs =require('fs') ;

const cal_input = fs.readFileSync('day_1/calorie_input.txt')

const calorie_string = cal_input.toString()

const calorie_array = calorie_string.split('\n\n')

const formatted_calories = calorie_array.map( elf => {
    let calories = elf.split('\n')
    // console.log(calories)
    let calorieCount = 0
    calories.forEach(cal => {calorieCount = parseInt(cal) + calorieCount} )
    return calorieCount
})
const sorted_arr = formatted_calories.sort().reverse()
console.info(sorted_arr)