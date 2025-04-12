const { Pool } = require('pg');
const queries = require('../queries/entries.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
  });

// GET
const getAllEntriesSinId = async () => {
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
/* 
{
    title: "Se acabaron las tortillas del Markina",
    content: "Estaban demasiado muy buenas y se las han comido todas",
    date:"2024-06-17"
    email: "guillermu@thebridgeschool.es",
    category: "sucesos",
    old_title:"El titulo antiguo a cambiar"
}
*/
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry,[
            title, 
            content,
            date,
            email, 
            category,
            old_title
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

const entries = {
    getAllEntriesSinId,
    deleteEntry,
    updateEntry
}

module.exports = entries;


// Pruebas

  /*  getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */



    getAllEntriesSinId()
.then(data=>console.log(data))


/*
 let newEntry = {
    title: "Se acabaron las tortillas del Markina",
    content: "Estaban demasiado muy buenas y se las han comido todas",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data))
    */


const updatedEntry = {
    title: "Bonita Semana Santa",
    content: "Semana santa con back",
    date:"2024-04-12",
    email: "jonathan@thebridgeschool.es",
    category: "Backend",
    old_title:"Bonita Semana Santa"
}

updateEntry(updatedEntry)
    .then(data => console.log("Se ha modificado la entry -> " + updatedEntry.old_title))




    const deletedEntry = {
        title: "El rayo gana la champions"
    }
    
    deleteEntry(deletedEntry)
        .then(data => console.log("Se ha borrado la entry -> " + deletedEntry.title))
