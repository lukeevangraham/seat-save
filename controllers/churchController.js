const db = require("../models")

module.exports = {
    // create a church account
    post: async (req, res) => {
        try {
            console.log("BODY: ", req.body)
            const dbChurch = await db.Church.create(req.body)
            res.json({
                message: `Church added ${dbChurch}`
            })
        } catch (error) {
            console.log(error);
        }
    }
}