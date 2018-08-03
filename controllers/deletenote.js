const handleDeleteNote = (db) => (req,res) => {
	const {id} = req.body;
	db('entries')
	.where('id', '=', id)
	.del()
	.then(response => {
		res.json('sucess')
	})
    .catch(err => res.status(400).json(err))
}
module.exports = {
	handleDeleteNote
}
/*
knex('accounts')
.where('activated', false)
.del()
Outputs:
delete from `accounts` where `activated` = false
*/