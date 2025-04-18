const entry = require("../config/db_pgsql"); // Importar el modelo de la BBDD


const getAllAuthors = async (req, res) => {
  let entries;
  try {
      entries = await entry.getAllAuthors();
    res.status(200).json(entries); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const getAlejandru = async (req, res) => {
  const alejandru = req.body; // {title}
  if (
    "email" in alejandru 
  ) {
    try {
      const response = await entry.getAlejandru(alejandru);
      res.status(200).json({
        items_updated: response,
        data: alejandru,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const deleteEntry = async (req, res) => {
  const deleteEntry = req.body; // {title}
  if (
    "email" in deleteEntry 
  ) {
    try {
      const response = await entry.deleteEntry(deleteEntry);
      res.status(200).json({
        items_updated: response,
        data: deleteEntry,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const updateEntry = async (req, res) => {
  const modifiedEntry = req.body; // {name,surname,email,image,old_title}
  if (
    "name" in modifiedEntry &&
    "surname" in modifiedEntry &&
    "email" in modifiedEntry &&
    "image" in modifiedEntry &&
    "old_email" in modifiedEntry 
  ) {
    try {
      const response = await entry.updateEntry(modifiedEntry);
      res.status(200).json({
        items_updated: response,
        data: modifiedEntry,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const insertEntry = async (req, res) => {
  const insertEntry = req.body; // {name,surname,email,image,old_title}
  if (
    "name" in insertEntry &&
    "surname" in insertEntry &&
    "email" in insertEntry &&
    "image" in insertEntry
  ) {
    try {
      const response = await entry.insertEntry(insertEntry);
      res.status(200).json({
        items_updated: response,
        data: insertEntry,
      });
    } catch (error) {
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

module.exports = {
getAllAuthors,
getAlejandru,
deleteEntry,
updateEntry,
insertEntry
};
