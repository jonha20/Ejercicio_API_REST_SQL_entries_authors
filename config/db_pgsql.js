const { Pool } = require('pg');
const queriesAuthors = require('../queries/authors.queries') // Queries SQL Authors
const queriesEntry = require('../queries/entries.queries') // Queries SQL Entries

const pool = new Pool({
    host: 'dpg-cvt93e15pdvs739inslg-a.frankfurt-postgres.render.com',
    user: 'api_sql_entries_authors_user',
    port: '5432',
    database: 'api_sql_entries_authors',
    password: '5udZFrlUYfHbjA0vjXb5mqDYX6avhPyA',
    ssl: {
        rejectUnauthorized: false // Necesario para conexiones SSL en Render
      }
  });
/*
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
  });*/

//GET

const getAllAuthors = async () => {
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queriesAuthors.getAllAuthors)
    result = data.rows
} catch (err) {
    console.log(err);
    throw err;
} finally {
    client.release();
}
return result
}

getAllAuthors()
.then(data=>console.log(data))


const getAlejandru = async (entry) => {
const {email} = entry;
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queriesAuthors.getAlejandru,[
        email
    ]);
    result = data.rows
} catch (err) {
    console.log(err);
    throw err;
} finally {
    client.release();
}
return result
}


const getAlejandrudata = {
    email: "alejandru@thebridgeschool.es"
}

getAlejandru(getAlejandrudata)
    .then(data => console.log(data))

//DELETE

const deleteEntryAuthors = async (entry) => {
    const {email} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.deleteEntry,[
            email
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

const deletedEntryAuthors = {
    email: "jabier@thebridgeschool.es"
}

deleteEntryAuthors(deletedEntryAuthors)
    .then(data => console.log("Se ha borrado la entry -> " + deletedEntryAuthors.email))

//UPDATE

const updateEntryAuthors = async (entry) => {
    const { name, surname, email, image, old_email } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.updateEntry,[
            name, 
            surname,
            email, 
            image,
            old_email
        ]);
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updatedEntryAuthors = {
    name: "Jonathan",
    surname: "Moran",
    email:"jonathan@thebridgeschool.es",
    image: "imagen",
    old_email: "jonathan@thebridgeschool.es"
}

updateEntryAuthors(updatedEntryAuthors)
    .then(data => console.log("Se ha modificado la entry -> " + updatedEntryAuthors.email))

//INSERT

const insertEntry = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesAuthors.insertEntry,[
            name, 
            surname,
            email, 
            image
        ]);
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const insertedEntry = {
    name: "Sandra",
    surname: "Moran",
    email:"sandra@thebridgeschool.es",
    image: "imagen"
}

insertEntry(insertedEntry)
    .then(data => console.log("Se ha modificado la entry -> " + insertedEntry.email))

//ENTRIES

// GET

const getAllEntriesSinId = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesEntry.getAllEntriesSinId)
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
        const data = await client.query(queriesEntry.deleteEntry,[
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
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queriesEntry.updateEntry,[
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

//DATOS POR CONSOLA


getAllEntriesSinId()
.then(data=>console.log(data))




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
