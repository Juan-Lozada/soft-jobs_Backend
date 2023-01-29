const { users, create, verifyUser } = require('../function/function')

const controller = {
    show: async (req, res) => {
        try {
            const Authorization = req.header('Authorization');
            const token = Authorization.split('Bearer ')[1];
            jwt.verify(token, 'az_AZ');
            const { email } = jwt.decode(token);
            const usuario = await users(email);
            res.status(200).send(usuario[0]);
        } catch (error) {
            console.error(e);
            res.status(500).json({ message: `server internal error` })
        }
    },

    addUser: async (req, res) => {

        try {
            const { email, password, rol, lenguage } = req.body
            await create(email, password, rol, lenguage)
            res.send(`se ha agregado al usuario ${email}`)

        }
        catch (e) {
            console.error(e);
            res.status(500).json({ message: `server internal error` })
        }

    },

    login: async (req, res) => {

        try {
            const { email, password } = req.body
            const token = jwt.sign({ email },'az_AZ' )
            await verifyUser(email, password)
            res.send(token)
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ message: `server internal error` })
        }
    },

    notFound: (req, res) => {
        res.status(404).send('Not found 404')
    }
}

module.exports = controller