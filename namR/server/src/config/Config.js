/// Configuration file for PORT and /SQLite Sequelize DB
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'namr',
        user: process.env.DB_USER || 'dezz',
        password: process.env.DB_PW || 'dezzdatabase',
    },

}