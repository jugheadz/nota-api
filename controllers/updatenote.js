const handleUpdateNote = (db) => (req,res) => {
	const { userid, id, title, note, tags, updated_at } = req.body;
	db('entries')
	.where('id', '=', id)
	.update({
		userid:userid,
		title:title,
		note:note,
		tags:tags,
		updated_at:updated_at
	})
    .catch(err => res.status(400).json(err))
}
module.exports = {
	handleUpdateNote
}
/*
knex('books')
.where('published_date', '<', 2000)
.update({
  status: 'archived',
  thisKeyIsSkipped: undefined
})
Outputs:
update `books` set `status` = 'archived' where `published_date` < 2000
*/