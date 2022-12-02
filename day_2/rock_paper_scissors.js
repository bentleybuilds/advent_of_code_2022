const fs = require ('fs')

const strat_guide = fs.readFileSync('day_2/strategy_input.txt')

const rounds = strat_guide.toString().split('\n')

let score = 0

const scoring = {
    'X':{
        'A':3,
        "B":1,
        "C":2
    },
    'Y':{
        'A':4,
        "B":5,
        "C":6
    },
    'Z':{
        'A':8,
        "B":9,
        "C":7
    }
}
// const scoring = {
//     'X':{
//         'A':4,
//         "B":1,
//         "C":7
//     },
//     'Y':{
//         'A':8,
//         "B":5,
//         "C":2
//     },
//     'Z':{
//         'A':3,
//         "B":9,
//         "C":6
//     }
// }

for(let round of rounds){
    score = score + scoring[round[2]][round[0]]
}
console.log(score)