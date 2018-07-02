UPDATE rtello_cards
set cards = json_array_elements_text($1)
where id = $2