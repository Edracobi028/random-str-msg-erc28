#!/usr/bin/env node
//BASE DEL COMANDO QUE VAMOS A CREAR DENTRO DE NPM
//GENERAMOS UNA INSTRUCCION INDICANDO QUE ESTE ARCHIVO VA A FUNCIONAR DEL LADO DE NODE
let random = require('../src/index.js'); //crear y guardar en una variable el index

random.funnyCommit(); //ejecutar la funcion que se encuentra dentro de la variable que creamos
