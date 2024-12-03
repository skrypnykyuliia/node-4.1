const moment = require('moment');

const currentDate = moment();

const formattedDate1 = currentDate.format('DD-MM-YYYY');
const formattedDate2 = currentDate.format('MMM Do YY');
const formattedDate3 = currentDate.format('dddd');

console.log('Current Date (DD-MM-YYYY):', formattedDate1);
console.log('Current Date (MMM Do YY):', formattedDate2);
console.log('Current Day (dddd):', formattedDate3);

