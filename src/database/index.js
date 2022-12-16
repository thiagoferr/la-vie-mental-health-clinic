const {Sequelize} = require('sequelize');
const auth = require('../config/auth');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const Psychiatrist = require('../models/Psychiatrist')
const username = auth.username;
const password = auth.password;
const database = auth.database;
const config = {
    dialect: auth.dialect,
    host: auth.host,
    port:  auth.port
}
let db = {};

try {
    db = new Sequelize(database, username, password, {
        dialect: auth.dialect,
        host: auth.host,
        port:  auth.port
    });
} catch (err) {
    console.error("Erro ao carregar o banco de dados", err);
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Autenticado com sucesso!");
    } catch (err) {
        console.log("Erro na autenticação...", err);
    }
};

Object.assign(db, {
    hasConnection,
})

Psychiatrist.init(db);
Patient.init(db);
Appointment.init(db);

Psychiatrist.associate(db.models);
Patient.associate(db.models);
Appointment.associate(db.models);

module.exports = db;