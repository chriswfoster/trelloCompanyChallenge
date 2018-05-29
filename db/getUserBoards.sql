SELECT ru.uid, ru.displayname, ru.email, ru.image, rb.id, rb.name FROM rtello_users as ru
JOIN rtello_boards as rb ON ru.id = rb.uid
where ru.id = $1