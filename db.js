/** Database connection for Microblog. */

const { Client } = require("pg");

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'microblog-test'
// - else: 'microblog'

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "microblog-test";
} else {
  DB_URI = process.env.DATABASE_URL || 'microblog';
}

console.log('Connected to DB_URL: ', DB_URI);

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
