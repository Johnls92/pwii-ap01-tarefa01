const db = require('../config/db.config');
const Time = db.time;

// Listar todos os times
exports.timesList = async(req, res) => {
  try {
    const times = await Time.findAll();
    res.json({ times: times });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Detalhar um time
exports.timesRead = async(req, res) => {
  try {
    const time = await Time.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ time: time });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Criar um time
exports.timesCreate = async(req, res) => {
  try {
    const time = await Time.create(req.body);
    res.status(201).json({ time: time });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Atualizar um time
exports.timesUpdate = async(req, res) => {
  try {
    const time = await Time.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apagar um time
exports.timesDelete = async(req, res) => {
  try {
    const time = await Time.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

