const Singleton = require('./singleton');

var db_connection = Singleton.getInstance();
var db_connection2 = Singleton.getInstance();

console.log('Same connection instance? ' + (db_connection === db_connection2));

Singleton.destroyConnection();

var db_connection3 = Singleton.getInstance();
console.log('Same connection instance? ' + (db_connection3 === db_connection2));
