const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, async (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");

    await db.serialize(() => {
      // create user table
      db.run(
        `CREATE TABLE users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        )`,
        (err) => {
          if (err) {
            // Table already created
          } else {
            // Table just created, creating some rows
          }
        }
      );

      // create task table
      db.run(
        `CREATE TABLE tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        is_done INTEGER NOT NULL DEFAULT 0,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`,
        (err) => {
          if (err) {
            // Table already created
          } else {
            // Table just created, creating some rows
          }
        }
      );
    });
  }
});

module.exports = db;
