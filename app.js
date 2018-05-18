const app = require('./config').express;
const http = require('http');
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

// /**
//  * Ativa o servidor, conecta ao bd e armazena conexão.
//  * @param {Object} app App express
//  */
// async function run(app) {
//     await app.listen(process.env.PORT || 3000);
//     console.info('Servidor iniciado.');
    
//     // const client = await MongoClient.connect(process.env.MONGODB_URI);
//     // console.info('Banco conectado.');
    
//     // const dbName = process.env.MONGODB_URI.split('/')[3];
    
//     // app.locals.db = client.db(dbName);
// }

// run(app).catch(err => {
//     console.error(err);
// });

app.set('port', 1337);
app.set('views', path.join(__dirname, 'view'));
app.listen(app.get('port'), function() {
  console.log('listening on port ' + app.get('port'));
});
// http.createServer(app).listen(app.get('port'), function(){
//     console.log('Express server listening on port ' + app.get('port'));
//   });
  