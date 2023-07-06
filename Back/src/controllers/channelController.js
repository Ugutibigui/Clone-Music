const channelDatabase = require("../database/channels")

const getChannels = async (req, res) => {
    const local = req.query.local
    const channels = await channelDatabase.getChannels(local)
    return res.status(200).json(channels)
}

module.exports = {
    getChannels
}