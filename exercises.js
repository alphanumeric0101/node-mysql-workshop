// Ex-1
// ####

var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'mysql'
});

connection.query("show databases", function(err, results, fields) {

    results.forEach(function(item){
      console.log(item.Database.green.bold);
    });

});

// Ex-3
// ####

var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query("select * from Account limit 5", function(err, results, fields) {

      results.forEach(function(item){
      console.log(('#' + item.id).bold + ': ' + item.email);
    });

});

// Ex-4
// ####

var connection = mysql.createConnection({
  host: process.env.IP,
  user: process.env.C9_USER,
  password: '',
  database: 'addressbook'
});

connection.query("select id, email, accountID, name from Account JOIN AddressBook ON Account.id=AddressBook.accountID", function(err, results, fields) {

  var temp = 0;

  results.forEach(function(item) {

    if (temp != item.accountId) {
      console.log(('#' + item.id).bold + ': ' + (item.email).bgBlue);
      console.log('  ' + (item.name).green);

    }
    else {
      console.log('  ' + (item.name).green);
    }

    temp = item.accountId;

  });
});

// EX-5
// ####

var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
  host: process.env.IP,
  user: process.env.C9_USER,
  password: '',
  database: 'addressbook'
});

connection.query("select Account.id, email, accountId, name from Account LEFT OUTER JOIN AddressBook ON Account.id=AddressBook.accountID", function(err, results, fields) {

  var temp = 0;

  results.forEach(function(item) {
    
    if (!item.accountId){
      console.log(('#' + item.id).bold + ': ' + (item.email).bgBlue);
      console.log('-- there are no books yet --')
      temp++;
    }

    else if (temp != item.accountId) {
      console.log(('#' + item.id).bold + ': ' + (item.email).bgBlue);
      console.log('  ' + (item.name).green);
    }
    else{
      console.log('  ' + (item.name).green);
    }

    temp = item.id;

  });
});

