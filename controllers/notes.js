const handleNotes = (db) => (req,res) => {
	const { uid } = req.body;
	db.select('entries.id', 'entries.userid', 'entries.title', 'entries.note', 'entries.tags', 'entries.created_at', 'entries.updated_at')
		.from('entries')
		.leftJoin('users', 'entries.userid', 'users.id')
		.where('entries.userid', '=', uid)
		.orderBy('entries.updated_at', 'desc')
		.then(data => {
      		res.json(data);
    	})
    	.catch(err => res.status(400).json('unable to work with API'))
}
module.exports = {
	handleNotes
}
/*
knex.select('*').from('users').leftJoin('accounts', 'users.id', 'accounts.user_id')
Outputs:
select * from `users` left join `accounts` on `users`.`id` = `accounts`.`user_id`
*/