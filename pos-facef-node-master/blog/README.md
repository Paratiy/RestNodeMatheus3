# Blog

Plataforma para criação de posts

## Requirements

[nodejs](https://nodejs.org/) v12.x LTS
mysql or sqlite3

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

OS X & Linux:

```bash
npm install
```

## Documentation

Based at swagger

http://localhost:3000/documentation

## Development

Setting `.env` environment config.

**sqlite**

```dotenv
DB_NAME="sqlite:blog.sqlite"
```

**mysql**

Set the `DB_*` environment variables, and change the `database.config.js` to work with mysql.

`.env`

```dotenv
DB_HOST=""
DB_PORT=""
DB_USERNAME=""
DB_NAME=""
DB_PASSWORD=""
```

`database.config.js`

```js
  development: {
    default: new Sequelize(Env.DB_NAME, Env.DB_USERNAME, Env.DB_PASSWORD, {
      host: Env.DB_HOST,
      port: Env.DB_PORT,
      dialect: 'mysql',
      logging: Env.DEBUG,
      define: {
        freezeTableName: true,
        paranoid: true
      }
    })
  },
```

*This is the same configuration of production database*

**Run project**

```bash
npm run dev
```

## Testing

Setting `test/.env` environment with the same variables of `.env`, but use values to test environment.

```bash
npm test
```

## Production

Change `.env` to production environment variables

```bash
npm start
```
