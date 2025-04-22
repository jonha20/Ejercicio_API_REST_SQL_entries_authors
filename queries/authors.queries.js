const queries = {
    getAllAuthors: `SELECT * FROM public.authors;`,
    getEmail:  `SELECT * FROM public.authors
    WHERE email = $1;`,
    updateAuthor:`UPDATE public.authors
	SET 
        name=$1, 
        surname=$2, 
        email=$3,  
        image=$4
	WHERE 
        email=$5;`,
    deleteAuthor:`DELETE FROM public.authors 
    WHERE email = $1;`,
    insertAuthor:`INSERT INTO public.authors (name, surname, email, image)
VALUES ($1, $2, $3, $4);`
}
module.exports = queries;