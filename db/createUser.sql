INSERT INTO rtello_users
    (uid, displayname, email, image)
VALUES
    ($1, $2, $3, $4)
RETURNING *;