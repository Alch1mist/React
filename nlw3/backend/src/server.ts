import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Reecurso = usuario

//metodos HTTP = GET POST PUT DELETE
//Parametros

// GET = Buscar informacao (lista,item)
// POST = Criando uma informacao
// PUT = Editando uma informacao
// DELETE = Deletando uma informacao

// Query Params: http://localhost:3333/users?search=exemplo = usa para paginacao,busca ou filtros etc..
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um parametro)



app.listen(3333);

//RE1 / RES 
// localhost:3333

// Driver nativo, Query builder, ORM