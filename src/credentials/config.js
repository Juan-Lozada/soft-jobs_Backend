const { Pool } = require('pg')
require( 'dotenv' ).config()
 const credentials = {
        host: 'postgresql-jlserverdb.alwaysdata.net',
        user: 'jlserverdb',
        port: 5432,
        database: 'jlserverdb_my_precious',
        password: 'Juan19051999',
        allowExitOnIdle: true

}
const pool = new Pool(credentials)

module.exports = pool