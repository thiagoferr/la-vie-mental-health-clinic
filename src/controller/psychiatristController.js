const Psychiatrist = require('../models/Psychiatrist')
const bcrypt = require('bcryptjs')

const psicologoController = {
  async store(req, res) {
    const { name, email, password, introduction } = req.body
    if (await Psychiatrist.findOne({ where: {email} }))
      return res.status(400).send('Error: This user already exists')

    const hash = bcrypt.hashSync(password, 10)

    const newPsychiatrist = await Psychiatrist.create({
      name,
      email,
      password: hash,
      introduction,
    })
    if (!newPsychiatrist)
      return res.status(401).send({ error: 'A error occurred while creating' })
    return res.status(201).json(newPsychiatrist)
  },

  async findAll(req, res) {
    const listAll = await Psychiatrist.findAll()
    if (!listAll) return res.status(404).send({ message: 'Not Found' })
    return res.status(200).json(listAll)
  },

  async findById(req, res) {
    const listById = await Psychiatrist.findByPk(req.params.id)
    if (!listById) return res.status(404).send({ message: 'Id not found' })
    return res.status(201).json(listById)
  },

  async updated(req, res) {
    const { name, email, password, introduction } = req.body
    const hash = bcrypt.hashSync(password, 10)
    const id = req.params.id

    if (!(await Psychiatrist.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Psychiatrist.update(
      {
        name,
        email,
        password: hash,
        introduction,
      },
      {
        where: {
          id,
        },
      },
    )
    if (!status) return res.status(400).send({ error: 'Error updating' })
    return res.sendStatus(200)
  },

  async remove(req, res) {
    const { id } = req.params
    if (!(await Psychiatrist.findByPk(id)))
      return res.status(404).send({ message: 'Not Found' })

    const status = await Psychiatrist.destroy({
      where: {
        id,
      },
    })
    if (!status) return res.status(400).send({ message: 'Status error' })
    return res.sendStatus(200)
  },
}

module.exports = psicologoController
