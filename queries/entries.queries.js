const queries = {
    getAllEntriesSinId: `SELECT e.title,e.content,e.date,e.id_author,e.category
    FROM public.entries AS e;`,
    updateEntry:`UPDATE public.entries
	SET 
        title=$1, 
        content=$2, 
        date=$3, 
        id_author=(SELECT id_author FROM public.authors WHERE email=$4), 
        category=$5
	WHERE 
        title=$6;`,
    deleteEntry:`DELETE FROM public.entries 
    WHERE title = $1;`
}
module.exports = queries;