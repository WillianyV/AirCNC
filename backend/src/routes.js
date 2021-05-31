const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
//resposnavel pelas rotas:
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard', DashboardController.show);

//criar um spot na reserva
routes.post('/spots/:spot_id/bookings', BookingController.store);


//exportar nossas rotas: para que a app conheça essas rotas
module.exports = routes;