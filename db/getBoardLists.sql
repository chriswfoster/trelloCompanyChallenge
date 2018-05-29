SELECT rc.lid, rl.name, rl.bid, rc.id, rc.cards FROM rtello_lists as rl
JOIN rtello_cards as rc ON rc.lid = rl.id
WHERE rl.bid = $1