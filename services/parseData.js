const xlsx = require('node-xlsx');

const parseData = (req, res) => {
	const { source, destination } = req.body;
	// TODO: introspect source and destination database URLs
	// TODO: return the parsed database schema in json format
	console.log({ source, destination })
	return res.status(200)
}

module.exports = {
	parseData
}
