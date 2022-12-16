const Appointment = require('../models/Appointment')
const Patient = require('../models/Patient');
const Psychiatrist = require('../models/Psychiatrist');

const appointmentController = {
  
  async store(req, res) {
    
    const { appointment_date, diagnosis, id_psychiatrist, id_patient } = req.body

    if (
      (!await Psychiatrist.findOne({ where: { id: id_psychiatrist } })) 
      &&
      (!await Patient.findOne({ where: { id: id_patient } }))
    ){
      return res.status(400).send('Error: This user does not exist')
    }

    const newAppointment = await Appointment.create({
      appointment_date,
      diagnosis,
      id_psychiatrist,
      id_patient,
    })

    if (!newAppointment)
      return res.status(401).send({ error: 'A error occurred while creating' })

    return res.status(201).json(newAppointment)
  },

  async findAll(req, res) {

    const listAll = await Appointment.findAll({
      include: 
      [
        { association: 'patient' , attributes: ['name', 'email', 'birth']}, 
        { association: 'psychiatrist', attributes: ['name', 'email', 'introduction']}
      ]
  })

    if (!listAll) 
      return res.status(404).send({ message: 'Not Found' })
    return res.status(200).json(listAll)
  },

  async findById(req, res) {
    const listById = await Appointment.findByPk(req.params.id, 
      {
        include: 
        [
          { association: 'patient' , attributes: ['name', 'email', 'birth']}, 
          { association: 'psychiatrist', attributes: ['name', 'email', 'introduction']}
        ]
    })
    if (!listById) 
      return res.status(404).send({ message: 'Id not found' })
    return res.status(201).json(listById)
  },

  async updated(req, res) {
    const {  
      appointment_date,
      diagnosis,
      id_psychiatrist,
      id_patient,} = req.body

    const id = req.params.id

    if (!(await Appointment.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Appointment.update(
      {
        appointment_date,
        diagnosis,
        id_psychiatrist,
        id_patient,
      },
      {
        where: {
          id,
        },
      },
    )
    if (!status) {
      return res.status(400).send({ error: 'Error updating' })
    }
    return res.sendStatus(200)
  },

  async remove(req, res) {
    const { id } = req.params
    if (!(await Appointment.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Appointment.destroy({
      where: {
        id,
      },
    });

    if (!status) {
      return res.status(400).send({ message: 'Status error' })
    }
    return res.sendStatus(200);
  },
}

module.exports = appointmentController
