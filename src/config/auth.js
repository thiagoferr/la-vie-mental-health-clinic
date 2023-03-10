require("dotenv/config");
// import 'dotenv/config'

const auth = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT)
}

if(process.env.NODE_ENV === 'production'){
    Object.assign(auth, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    })
}

module.exports = auth;