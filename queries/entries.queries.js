const queries = {
    getAllEntriesSinId: `SELECT  t2.title,t2.content, t2.date,  t1.name, t1.surname, t1.image FROM authors t1
inner join entries t2 on t2.id_author = t1.id_author;`,
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