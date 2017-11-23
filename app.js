const mongodb = require('mongodb').MongoClient; 
const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');

//ACCESS EXPRESS PROPERTY
let app = express();

//CREATE DATABASE AND USE
let url = 'mongodb://localhost:27017/CrudBasico';

//GESTOR DATABASE MONGODB
mongodb.connect(url, (err, db)=>{
    assert.equal(null, err);
    console.log('Conectado con DataBase');
    db.close();
});

//MODELO DE VISTAS
app.set('view engine', 'hbs');

//CARPETAS PUBLICAS
app.use(express.static('public'));

//PROCESAMIENTO DE DATOS
app.use(bodyParser.urlencoded({extended: false}));

//METODOS HTTP
app.get('/', (req, res)=>{
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.find({}, {}).toArray((err, result)=>{
            assert.equal(null, err);
            res.render('index', {items: result});
            db.close();
        })
    });
});
app.post('/createDoc', (req, res)=>{
    var items = {
        documento: req.body.ndoc,
        nombre: req.body.nom,
        apellido: req.body.ape,
        edad: req.body.edad,
        direccion: req.body.dir,
        telefono: req.body.tel,
        celular: req.body.cel,
        hoobie: req.body.hob
    };
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.insertOne(items, (err, result)=>{
            assert.equal(null, err);
            console.log('Datos insertados correctamente');
        });
        datosPersonales.find({}, {}).toArray((err, result)=>{
            assert.equal(null, err);
            res.render('index' , {items: result});
            db.close();
        });
    });
});
app.post('/updateDoc', (req, res)=>{
    var items = {
        documento: req.body.ndoc,
        nombre: req.body.nom,
        apellido: req.body.ape,
        edad: req.body.edad,
        direccion: req.body.dir,
        telefono: req.body.tel,
        celular: req.body.cel,
        hoobie: req.body.hob
    };
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.updateOne({documento: items.documento}, {$set: {
            nombre: items.nombre,
            apellido: items.apellido,
            edad: items.edad,
            direccion: items.direccion,
            telefono: items.telefono,
            celular: items.celular,
            hoobie: items.hoobie
        }}, (err, result)=>{
            assert.equal(null, err);
            console.log('Datos modificados correctamente');
        });
        datosPersonales.find({}, {}).toArray((err, result)=>{
            assert.equal(null, err);
            res.render('index' , {items: result});
            db.close();
        });
    });
});
app.post('/deleteDoc', (req, res)=>{
    var item = {documento: req.body.NDoc};
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.deleteOne({documento: item.documento}, (err, result)=>{
            assert.equal(null, err);
            console.log('Datos eliminados correctamente');
        });
        datosPersonales.find({}, {}).toArray((err, result)=>{
            assert.equal(null, err);
            res.render('index' , {items: result});
            db.close();
        });
    });
});
app.post('/DocToUpd', (req, res)=>{
    var item = {documento: req.body.NDoc};
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.findOne({documento: item.documento}, (err, result)=>{
            assert.equal(null, err);
            console.log('Datos encontrados a actualizar')
            console.log(result);
            res.send(result);
            db.close();
        })
    });
});
app.post('/DocToDel', (req, res)=>{
    var item = {documento: req.body.NDoc};
    mongodb.connect(url, (err, db)=>{
        assert.equal(null, err);
        var datosPersonales = db.collection('datosPersonales');
        datosPersonales.findOne({documento: item.documento}, (err, result)=>{
            assert.equal(null, err);
            console.log('Datos encontrados a eliminar')
            console.log(result);
            res.send(result);
            db.close();
        });
    });
});

//CORRER SERVIDOR
app.listen(3000, ()=>{
    console.log('Servidor Web Iniciado en el puerto 3000')
});