const userDatabase = require('../database/user')

const getUsers = async (req, res) => {
    const number = req.query.limit || 500
    const limit = parseInt(number)

    const userId = req.query.id || ''
    const user = parseInt(userId)

    const users = await userDatabase.getUsers(limit, user)
    return res.status(200).json(users)
}

module.exports = {
    getUsers
}