//require couple of files
// require('fs')
const fs = require('fs')

//get user's input (process.argv[2])
// set to command
const command = process.argv[2]
const date = process.argv[3]



//command 'new' for new cases on a day
// command 'total' for total cases on a day 
// use date to retrieve that day's case data
//pull data from csv file [[fs.readFileSync]]
//passing it two things : 'csv' file , 
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf8')

//import getRows - it returns a 2 dimensional array 'file'
const getRows = require('./get-rows.js')
const getDate = require('./get-date.js')
const getTotalCasesByDay = require('./get-total-cases-by-day.js')
const getRow = require('./get-row.js')
const getNewCasesByDay = require('./get-new-cases-by-day.js')

//examine the command, the user inputs
// create an 'if/else' chain or 'switch'
// create a 'default'- for 'switch'. or an 'else' - for 'if/else' statement
// 2 commands allowed 'total' and 'new', if not return 'menu'

if (command === 'new' && date < '2020-07-12' && date > '2019-12-31') {
    const rows = getRows(file);
    console.log("new cases reported for the day, " + date + ':=  ' + getNewCasesByDay(date, rows))

}

else if (command === 'total' && date < '2020-07-12' && date > '2019-12-31'){
    const rows = getRows(file);
    console.log("total cases on that day:" + date + ':= ' + getTotalCasesByDay(date, rows))
}

// else if (command !== 'new' || command !== 'total'){
//     console.log("menu")
// }

else {
    console.log('invalid input')
    console.log('')
    console.log("type ^ node main.js new [insert date] ^ to see all the NEW CASES for that day")
    console.log('')
    console.log("type ^ node main.js total [insert date] ^ to see all the TOTAL CASES for that day")
    console.log('')
}
// if (date !== get)
// for (const rows of getRows(file)){
//     const allDatesArray = []
//     const allDates = getDate(rows)
//     console.log(allDates)
//     console.log(allDatesArray)
//     if (allDatesArray.includes(date)){
//         console.log('error date')
// }
// }



//give me a date
//i give you the total cases on that day, if command ===   total 
// i give you new cases on that day, if command === new
// ise only one function for each

// i will be feeding the date and the 2 dimensional array
