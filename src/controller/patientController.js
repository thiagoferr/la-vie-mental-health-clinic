const Patient = require('../models/Patient')

const patientController = {
  async store(req, res) {
    const { name, email, birth } = req.body
    console.log(req.body.email)

    if (await Patient.findOne({ where: {email} }))
      return res.status(400).send("Error: This user already exists")

    const newPatient = await Patient.create( {
        name,
        email,
        birth
    });
    if(!newPatient)
        return res.status(401).send({error: 'A error occurred while creating'})

    return res.status(201).json(newPatient);
  },

  async findAll(req, res) {
    const listAll = await Patient.findAll()
    if (!listAll) return res.status(404).send({ message: 'Not Found' })

    return res.status(200).json(listAll)
  },

  async findById(req, res) {
    const listById = await Patient.findByPk(req.params.id)
    if (!listById) return res.status(404).send({ message: 'Id not found' })
    return res.status(201).json(listById)
  },

  async updated(req, res) {
    const { name, email, birth } = req.body
    const id = req.params.id

    if (!(await Patient.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Patient.update(
      {
        name,
        email,
        birth,
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
    if (!(await Patient.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Patient.destroy({
      where: {
        id,
      },
    })
    if (!status) {
      return res.status(400).send({ message: 'Status error' })
    }
    return res.sendStatus(200)
  },
}

module.exports = patientController
