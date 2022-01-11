// // create connection for Harper DB
// const harperive = require("harperive");
// const configuration = {
//   username: process.env.dewi_,
//   password: process.env.drs2020,
//   schema: process.env.classroom,
//   harperHost: process.env.modul-3-dewirat.harperdbcloud.com,
// };
//  harperive.Client(configuration);
// module.exports = d// const db = newb;

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://modul-3-dewirat.harperdbcloud.com',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic RGV3aV86ZHJzMjAyMA=='
//   },
//   body: JSON.stringify({
//     "operation": "describe_all"
// })

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://modul-3-dewirat.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic RGV3aV86ZHJzMjAyMA=='
  },
  body: JSON.stringify({
    "operation": "create_schema",
    "schema": "dev"
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});