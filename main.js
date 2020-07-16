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

if (command === 'new') {
    const rows = getRows(file);
    // console.log(getNewCasesByDay(date, rows))

}

else if (command === 'total'){
    const rows = getRows(file);
    // console.log(getTotalCasesByDay(date, rows))
}

else {return "menu"}


for (const rows of getRow(file)){
    const allDates = getDate
    console.log(rows)
}



//give me a date
//i give you the total cases on that day, if command ===   total 
// i give you new cases on that day, if command === new
// ise only one function for each

// i will be feeding the date and the 2 dimensional array
