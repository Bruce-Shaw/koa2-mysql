const Client = require("mysql-pro");
const client = new Client({     
    mysql: {
      database: 'test',
      user: 'root',
      password: 'password',
      port: '3306',
      host: 'localhost',
    }
}); 

module.exports = client;