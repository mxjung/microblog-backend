## Microblog Backend

Express server created for frontend application [Microblog](https://github.com/mxjung/microblog-frontend). It contains routes that talks to the client, and makes chances in the PostgeSQL database.

## Built With

* [Express](https://github.com/expressjs/express) - The web framework for Node
* [PostgreSQL](https://www.postgresql.org/) - Relational Database used to store posts and comments

### Installing

Clone this repository and `cd` into it

```
npm install
```

Automatically create database and add in dummy data

```
npm run seed
```

Start the application session

```
npm start
```

All routes are prefixed with `/api` so to fetch posts the route is `GET /api/posts`

## Deployment

Heroku was used to host the Express backend.

* [Deploying Node.js App on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
* [Adding PostgreSQL database config to Heroku app](https://devcenter.heroku.com/articles/heroku-postgresql)

You can also prepopulate the heroku server with dummy data in the data.sql file by using the following command:

```
heroku pg:psql < data.sql
```