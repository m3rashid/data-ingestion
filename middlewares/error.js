const isProduction = process.env.NODE_ENV === 'production'

const globalErrorHandlerMiddleware = (err, req, res, next) => {
	console.log(err);
	return res.status(500).json({
		message: !isProduction
			? JSON.stringify(err.message) || "Internal Server Error"
			: "Internal Server Error",
	});
};

module.exports = globalErrorHandlerMiddleware
