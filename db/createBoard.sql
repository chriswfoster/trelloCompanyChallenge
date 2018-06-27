INSERT INTO rtello_boards
    (name, uid)
values
    ($1, $2)
RETURNING *