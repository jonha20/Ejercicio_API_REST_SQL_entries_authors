const queries = {
    getAllAuthors: `SELECT * FROM authors;`,
    getAlejandru:  `SELECT * FROM authors
    WHERE email = $1;`,
    updateEntry:`UPDATE authors
	SET 
        name=$1, 
        surname=$2, 
        email=$3,  
        image=$4
	WHERE 
        email=$5;`,
    deleteEntry:`DELETE FROM authors 
    WHERE email = $1;`,
    insertEntry:`INSERT INTO authors (name, surname, email, image)
VALUES ($1, $2, $3, $4);`
}
module.exports = queries;