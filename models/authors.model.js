const pool = require('../config/db_pgsql');
const queries = require('../queries/authors.queries') // Queries SQL


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

// getAllAuthors()
// .then(data=>console.log(data))


const getEmail = async (entry) => {
const {email} = entry;
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getEmail,[
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


// const getEmaildata = {
//     email: "alejandru@thebridgeschool.es"
// }

// getEmail(getEmaildata)
//     .then(data => console.log(data))

//DELETE

const deleteAuthor = async (entry) => {
    const {email} = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[
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

// const deletedEntry = {
//     email: "jabier@thebridgeschool.es"
// }

// deleteAuthor(deletedEntry)
//     .then(data => console.log("Se ha borrado la entry -> " + deletedEntry.email))

//UPDATE

const updateAuthor = async (entry) => {
    const { name, surname, email, image, old_email } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor,[
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

// const updatedEntry = {
//     name: "Jonathan",
//     surname: "Moran",
//     email:"jonathan@thebridgeschool.es",
//     image: "imagen",
//     old_email: "jonathan@thebridgeschool.es"
// }

// updateAuthor(updatedEntry)
//     .then(data => console.log("Se ha modificado la entry -> " + updatedEntry.email))


const insertAuthor = async (entry) => {
    const { name, surname, email, image } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.insertAuthor,[
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

// const insertedEntry = {
//     name: "Sandra",
//     surname: "Moran",
//     email:"sandra@thebridgeschool.es",
//     image: "imagen"
// }

// insertAuthor(insertedEntry)
//     .then(data => console.log("Se ha modificado la entry -> " + insertedEntry.email))

const authors = {
    getAllAuthors,
    getEmail,
    deleteAuthor,
    updateAuthor,
    insertAuthor
}

module.exports = authors;