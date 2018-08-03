const handleNewNotes = (db) => (req,res) => {
	const { uid } = req.body;
	db('entries')
	.returning('*')
	.insert({userid: uid, title:' ', note: ' ', tags: ' '})
	.then(id =>{
		res.json(id[0])
	})
    .catch(err => res.status(400).json('unable to work with API'))
}
module.exports = {
	handleNewNotes
}
/*
knex('books').insert({title: 'Slaughterhouse Five'})
Outputs:
insert into `books` (`title`) values ('Slaughterhouse Five')
*/