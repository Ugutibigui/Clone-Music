const flowDatabase = require("../database/flow")

const getFlows = async (req, res) => {
    const flows = await flowDatabase.getFlows()
    return res.status(200).json(flows)
}

module.exports = {
    getFlows
}