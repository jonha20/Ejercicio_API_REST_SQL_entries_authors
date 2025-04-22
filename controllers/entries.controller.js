const entry = require("../models/entries.model"); // Importar el modelo de la BBDD


const getAllEntries= async (req, res) => {
  let entries;
  try {
      entries = await entry.getAllEntries();
    res.status(200).json(entries); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const updateEntry = async (req, res) => {
  const modifiedEntry = req.body; // {title, content, date, category, old_title}
  if (
    "title" in modifiedEntry &&
    "content" in modifiedEntry &&
    "date" in modifiedEntry &&
    "category" in modifiedEntry &&
    "old_title" in modifiedEntry
  ) {
    try {
      const response = await entry.updateEntry(modifiedEntry); // Llama al modelo
      res.status(200).json({
        items_updated: response,
        data: modifiedEntry,
      });
    } catch (error) {
      console.error("Error al actualizar la entrada:", error.message);
      res.status(500).json({ error: "Error en la BBDD" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos en la entrada" });
  }
};

const deleteEntry = async (req, res) => {
    const deleteEntry = req.body; // {title}
    if (
      "title" in deleteEntry 
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

module.exports = {
  getAllEntries,
  deleteEntry,
  updateEntry
};
