module.exports = {
    createUser: (req, res, next) => {
        console.log('user got to controller')
        const dbInstance = req.app.get('db')
        const { username, password } = req.body;

        dbInstance.create_user([username, password])
            .then((user) => {
                return res.status(200).send(user)
            })
            .catch((err) => res.status(500).send(err))

    },

    getUser: (req, res, next) => {
        console.log('get user controller fired')
        const dbInstance = req.app.get('db')
        const {username} = req.params;
        console.log(req.params)

        dbInstance.get_user([username])
        .then((user) => {
            return res.status(200).send(user)
        })
        .catch((err) => res.status(500).send(err))
    }
}