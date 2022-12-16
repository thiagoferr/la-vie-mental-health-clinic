const Psychiatrist = require ('../models/Psychiatrist');
const Patient = require ('../models/Patient');
const Appointment = require ('../models/Appointment');
const dashboardController = {

    async countPatient (req, res){
        const { count } = await Patient.findAndCountAll();
        if(!count)
            return res.status(400).send({ message: 'Empty' })
        return res.send({ count: count });
    },

    async countAppointment (req, res){
        const { count } = await Appointment.findAndCountAll();
        if(!count)
            return res.status(400).send({ message: 'Empty' })
        return res.send({ count: count });
    },
    
    async countPsychiatrist (req, res){
        const { count } = await Psychiatrist.findAndCountAll();
        if(!count)
            return res.status(400).send({ message: 'Empty' })
        return res.send({ count: count });
    },
}

module.exports = dashboardController;
