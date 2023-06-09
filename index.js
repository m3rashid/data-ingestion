require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
// const mongoose = require("mongoose");
const compression = require("compression")
const routes = require("./routes")
const globalErrorHandlerMiddleware = require('./middlewares/error');

const app = express();
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');
app.use(
	cors({
		origin: '*',
		credentials: true,
		methods: ['GET', 'POST', 'PUT'],
		optionsSuccessStatus: 200
	})
);

app.use(express.json({ limit: '50mb', parameterLimit: 100000 }));
app.use(
	express.urlencoded({
		extended: true,
		limit: '50mb',
		parameterLimit: 100000,
	})
);
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World'));
app.use(routes)

app.get('/health', (req, res) => {
	const healthCheck = {
		uptime: process.uptime(),
		responseTime: process.hrtime(),
		message: 'OK',
		timestamp: Date.now(),
	};
	try {
		return res.status(200).send(healthCheck);
	} catch (error) {
		healthCheck.message = error;
		return res.status(503).send(healthCheck);
	}
});

app.use((req, res, next) => res.status(404).send('Not Found'));
app.use(globalErrorHandlerMiddleware);

const startServer = async () => {
	try {
		// await mongoose.connect(process.env.MONGO_SRV, {})
		// console.log("Database Connected")
		app.listen(process.env.PORT || 4000, () => console.log('Server Ready'));
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

startServer();
