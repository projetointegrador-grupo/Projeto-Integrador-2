import sqlite3

connection = sqlite3.connect('database.db')


with open('esquema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO posts (titulo,nomeautor,ano,ISBN) VALUES (?, ?)",
            ('First Post', 'Content for the first post')
            )

cur.execute("INSERT INTO posts (titulo,nomeautor,ano,ISBN) VALUES (?, ?)",
            ('Second Post', 'Content for the second post')
            )

connection.commit()
connection.close()