const reportService = require('./report.service')

module.exports = {
    query
}

async function query(req, res) {
    const params = req.query;
    const { token } = params;
    delete params.token
    try {
        const report = await reportService.query(params, token)
        res.json(report)
    } catch (error) {
        res.status(500).send({ error })
    }
}