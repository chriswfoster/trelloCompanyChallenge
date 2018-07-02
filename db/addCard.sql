UPDATE rtello_cards
set cards = $1
where id = $2
RETURNING *