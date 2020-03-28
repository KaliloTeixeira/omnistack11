const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;





/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do Back-end
 * POST: Criar uma informação do Back-end
 * PUT: Alterar uma informação do Back-end
 * DELETE: Deletar uma informação do Back-end
 */

 /** 
  * Tipos de Parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */


  /**
   * Banco de Dados
   * 
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsofg SQL Server;
   * NoSQL: MongoDB, CouchDB, etc;
   */

   /**
    * Driver: SELECT * FROM USERS
    * Query Builder: table('users').select('*').where()
    */
