const express = require('express'); //importa o express
const mongoose = require('mongoose'); //importa o mongoose
const routes = require('./routes'); //importa as rotas

const app = express(); //cria a app

//conectar com o banco, coloca user, senha, e cria o nome do banco
mongoose.connect('mongodb+srv://williany:123@aircnc.wg4om.mongodb.net/aircncDataBase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
app.use(express.json()); //Diz express a utilizar o json

app.use(routes); //routas a serem utilizadas

app.listen(3333); //porta da app
