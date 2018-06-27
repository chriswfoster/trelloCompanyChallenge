update rtello_boards
set name = $2
where id = $1
RETURNING *