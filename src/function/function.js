const pool = require('../credentials/config');
const bcrypt = require('bcryptjs');

const users = async (email) => {
    const query = 'SELECT * FROM usuarios WHERE email = $1;'
    const value = [email];
    const { rows: usuario } = await pool.query(query, value);
    return usuario;
}

const create = async (email, password, rol, lenguage) => {
    const query = 'SELECT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)';
    const passwordCoded = bcrypt.hashSync(password);

    const values = [email, passwordCoded, rol, lenguage];
    await pool.query(query, values);

}

const verifyUser = async (email, password) => {
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    const { password: passwordCoded } = usuario;
    const validPassword = bcrypt.compareSync(password, passwordCoded);
    if (!validPassword || !rowCount) throw { code: 404, message: "No se encontró ningún usuario con estas credenciales" }

}

module.exports = { users, create, verifyUser }