# Postgres, Knex, Bookshelf ORM

The code in the following repository is based on the
[Bookshelf.js tutorial](http://zetcode.com/javascript/bookshelf/)
article.

# Setup

- `createdb bookshelf1` in terminal
- `psql -d bookshelf1 -a -f cities_postgresql.sql` to setup cities

# Postgres Commands

- dbeaver for db management via a GUI
- brew install postgres
- pg_ctl -D /usr/local/var/postgres stop/start
- createuser -s postgres
- createdb tester
- psql tester # open cli with database
- psql -c "\du"
- psql -c "\l"
- `psql -U carltonjoseph -c "drop database postgres"`
- `psql -c "drop user postgress"`
- psql -l
- psql
  - '\d' List of relations
  - `\du` display users
  - `\l` list databases
  - create user postgres superuser
  - create database postgres with owner postgres
  - 'd user' describe a user table in the db
  - `drop database <name>`
