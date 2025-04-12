const { Pool } = require('pg');
const queries = require('../queries/authors.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
  });

//GET

const getAllAuthors = async () => {
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllAuthors)
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
    const data = await client.query(queries.getAlejandru,[
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

const deleteEntry = async (entry) => {
    const {email} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[
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

const deletedEntry = {
    email: "jabier@thebridgeschool.es"
}

deleteEntry(deletedEntry)
    .then(data => console.log("Se ha borrado la entry -> " + deletedEntry.email))

//UPDATE

const updateEntry = async (entry) => {
    const { name, surname, email, image, old_email } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry,[
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

const updatedEntry = {
    name: "Jonathan",
    surname: "Moran",
    email:"jonathan@thebridgeschool.es",
    image: "imagen",
    old_email: "jonathan@thebridgeschool.es"
}

updateEntry(updatedEntry)
    .then(data => console.log("Se ha modificado la entry -> " + updatedEntry.email))

//INSERT

const insertEntry = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.insertEntry,[
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