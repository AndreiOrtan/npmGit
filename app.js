var moment = require("moment");
var unique = require("uniq");

var nums = [1, 1, 1, 1, 1, 22, 2, 33, 3, 66, 5, 6];
console.log(unique(nums));

const date = new Date();
const dateNew = moment(date).format("LL");
console.log(dateNew);
