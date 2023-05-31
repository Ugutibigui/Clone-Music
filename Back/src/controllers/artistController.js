const getArtists = (req, res) => {
    return res.status(200).json({
        message: "Sim"
    })
}

module.exports = {
    getArtists
}