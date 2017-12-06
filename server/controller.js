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
        const { username } = req.params;
        console.log(req.params)

        dbInstance.get_user([username])
            .then((user) => {
                return res.status(200).send(user)
            })
            .catch((err) => res.status(500).send(err))
    },

    postProp: (req, res, next) => {
        console.log('post property fired')
        const dbInstance = req.app.get('db')
        const userId = req.body.user[0].id
        const { name, desc, imgUrl, address, city, state, zip, loanAmount, monthlyMortgage, desiredRent, recomended } = req.body

        dbInstance.post_prop([userId, name, desc, address, city, state, zip, imgUrl, loanAmount, monthlyMortgage, desiredRent, recomended])
        .then((property) => {
            return res.status(200).send(property)
        })
        .catch((err) => res.status(500).send(err))
    },

    getProps: (req, res, next) => {
        console.log('get propertys fired')
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.get_all_properties([id])
        .then((properties) => {
            return res.status(200).send(properties)
        })
        .catch((err) => res.status(500).send(err))
    },

    getFilter: (req, res, next) => {
        console.log('get filter fired')
        const dbInstance = req.app.get('db')
        const {number} = req.params
        console.log(+number)

        dbInstance.get_filter_properties([+number])
        .then((properties) => {
            return res.status(200).send(properties)
        })
        .catch((err) => res.status(500).send(err))
    },

    
    
}