
CREATE TABLE sellers (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL, 
    balance REAL NOT NULL
);

CREATE TABLE transactions (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    type INT NOT NULL,
    date TEXT NOT NULL,
    product TEXT NOT NULL,
    value REAL NOT NULL,
    seller TEXT NOT NULL,
    FOREIGN KEY (seller) REFERENCES sellers(id)
);

SELECT * FROM sellers;
SELECT * FROM transactions;

CREATE TABLE users (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

