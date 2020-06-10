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

const client = new Client({
  connectionString: DB_URI,
});

console.log("DATABASE_URL is: ", DB_URI)
client.connect();


module.exports = client;
