const express = require('express');
const routes = express.Router();
const authController = require('../controller/authController');
const appointmentController = require('../controller/appointmentController');
const dashboardController = require('../controller/dashboardController');
const psychiatristController = require('../controller/psychiatristController'); 
const patientController = require('../controller/patientController');
const validatePsychiatrist = require('../validations/validatePsychiatrist');
const validateLogin = require('../validations/validateLogin');
const auth = require('../middlewares/auth');
const verifiedToken = require('../controller/decodeAndValidateToken');

//---------------------------------------------------------------------------------//

routes.post('/appointment', auth, appointmentController.store);
routes.get('/appointment', auth, appointmentController.findAll);
routes.get('/appointment/:id', verifiedToken.decodeToken, appointmentController.findById);
routes.put('/appointment/:id', verifiedToken.decodeToken, appointmentController.updated); 
routes.delete('/appointment/:id', verifiedToken.decodeToken, appointmentController.remove); 

routes.post('/psychiatrist', validatePsychiatrist, psychiatristController.store);
routes.get('/psychiatrist', psychiatristController.findAll);
routes.get('/psychiatrist/:id', psychiatristController.findById);
routes.put('/psychiatrist/:id', validatePsychiatrist, psychiatristController.updated); 
routes.delete('/psychiatrist/:id', psychiatristController.remove); 

routes.post('/patient', patientController.store);
routes.get('/patient', patientController.findAll);
routes.get('/patient/:id', patientController.findById);
routes.put('/patient/:id', patientController.updated); 
routes.delete('/patient/:id', patientController.remove); 

routes.get('/dashboard/count-appointment', dashboardController.countAppointment);
routes.get('/dashboard/count-patient', dashboardController.countPatient);
routes.get('/dashboard/count-psychiatrist', dashboardController.countPsychiatrist);

routes.post('/login', validateLogin, authController.login);

module.exports = routes;

// const Psychiatrist = require('../models/Psychiatrist');

// const express = require('express');
// const routes = express.Router();

// routes.get('/psychiatrist', psychiatristController.findAll);
// routes.post('/psychiatrist/register', psychiatristController.store);

// routes.get('/appointment', findAll);
// routes.get('/appointment', store);

// const psychiatristController = {

//     async findAll (req, res) {
//         const listOfPsychiatrists = await Psychiatrist.findAll();
//         if(!listOfPsychiatrists)
//             return res.status(400).send({message: "Not Found"});
//         return res.status(200).send(listOfPsychiatrists);
//     },
    
//     async store (req, res) {
//         const { email } = req.body;
//         if(await Psychiatrist.findByEmail({ email })){
//             return res.status(400).send("Error: This user already exists")
//         }
//         const newPsychiatrist = await Psychiatrist.create(req.body);
//         return res.status(200).json(newPsychiatrist);
//     }
// }


module.exports = routes;