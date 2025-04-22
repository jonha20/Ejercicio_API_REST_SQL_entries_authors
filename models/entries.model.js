const pool = require('../config/db_pgsql');
const queries = require('../queries/entries.queries') // Queries SQL
// GET

const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntriesSinId)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE

const deleteEntry = async (entry) => {
    const {title} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[
            title
        ]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE 

const updateEntry = async (entry) => {
    const { title, content, date, category, old_title } = entry;
    let client, result;
    try {
      client = await pool.connect(); // Conexión a la base de datos
      const data = await client.query(queries.updateEntry,[
            title, 
            content,
            date,
            category,
            old_title
        ]);
        result = data.rows; // Número de filas actualizadas
    } catch (err) {
      console.error("Error en la consulta SQL:", err.message);
      throw err;
    } finally {
      if (client) client.release(); // Libera el cliente
    }
    return result;
  };
const entries = {
    getAllEntries,
    deleteEntry,
    updateEntry
}

module.exports = entries;

//DATOS POR CONSOLA


// getAllEntries()
// .then(data=>console.log(data))




// const updatedEntry = {
//     title: "Bonita Semana Santa",
//     content: "Semana santa con back",
//     date:"2024-04-12",
//     email: "jonathan@thebridgeschool.es",
//     category: "Backend",
//     old_title:"Bonita Semana Santa"
// }

// updateEntry(updatedEntry)
//     .then(data => console.log("Se ha modificado la entry -> " + updatedEntry.old_title))




// const deletedEntry = {
//     title: "El rayo gana la champions"
// }

// deleteEntry(deletedEntry)
//     .then(data => console.log("Se ha borrado la entry -> " + deletedEntry.title))
