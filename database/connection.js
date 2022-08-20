const mysql = require("mysql2/promise");

const bd_usuario = 's221_tcc_g1_us';
const bd_senha = 'delv220809';
const bd_servidor = '10.67.22.216';
const bd_porta = '3306';
const bd_banco = 's221_tcc_g1_bd';
let connection;

const config = {
    host: bd_servidor,
    port: bd_porta,
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}

try {
    connection = mysql.createPool(config);

    console.log('Chamou conexão MySql!');    
} catch(error) {
    console.log(error);
}

module.exports = connection;