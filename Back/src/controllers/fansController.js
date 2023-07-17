const fansDatabase = require("../database/fans")

const getFans = async (req, res) => {
    const userNumber = req.query.user || ''
    const user = parseInt(userNumber)

    const amountNumber = req.query.amount || ''
    const amount = parseInt(amountNumber)

    const fans = await fansDatabase.getFans(user, amount)
    return res.status(200).json(fans)
}

module.exports = {
    getFans
}