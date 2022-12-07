const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '0.0.0.0',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'db'
    }
});

console.log(knex);