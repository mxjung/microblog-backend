const db = require("./db");
// console.log('DB IS: ', db);

async function seedData() {
  try {
    await db.query(
      `CREATE TABLE posts
         (id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          body TEXT,
          votes INT NOT NULL DEFAULT 0)
        ;`);

    await db.query(
      `CREATE TABLE comments
        (id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE)
        ;`);

    await db.query(
      `INSERT INTO posts (title, description, body) VALUES
                  ('First Post', 'Best post ever!', 'Everyone loves posting first. I win!'),
                  ('Second Post', 'A very good post!', 'Oh well. Didn''t get to be first.')
                  ;`);

    await db.query(
      `INSERT INTO comments (text, post_id) VALUES
                  ('This is a really great post.', 1),
                  ('I learned so much reading this.', 1)
                  ;`);
  } catch (err) {
    console.log("Something went wrong!");
    console.log(err);
    process.exit(1);
  }
}

seedData().then(() => {
  console.log("Successful seed!");
  process.exit();
});
