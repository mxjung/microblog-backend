-- DROP DATABASE IF EXISTS "microblog";
-- CREATE DATABASE "microblog";
-- \c "microblog"

-- These 3 commands up top will not work with heroku
-- with heroku, just run
-- heroku pg:psql < data.sql

-- added to drop tables if exists
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;

CREATE TABLE posts (id SERIAL PRIMARY KEY,
                    title TEXT NOT NULL,
                    description TEXT NOT NULL,
                    body TEXT,
                    votes INT NOT NULL DEFAULT 0);

CREATE TABLE comments (id SERIAL PRIMARY KEY,
                       text TEXT NOT NULL,
                       post_id INT NOT NULL REFERENCES posts ON DELETE CASCADE);

INSERT INTO posts (title, description, body) VALUES
    ('First Post', 'Best post ever!', 'Everyone loves posting first. I win!'),
    ('Second Post', 'A very good post!', 'Oh well. Didn''t get to be first.');

INSERT INTO comments (text, post_id) VALUES
    ('This is a really great post.', 1),
    ('I learned so much reading this.', 1),
    ('New comment added for the heck of it.', 2);

