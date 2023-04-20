



CREATE TABLE sellers (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL, --affiliate / creator
    balance REAL NOT NULL
);

CREATE TABLE transactions (
    id TEXT UNIQUE NOT NULL PRIMARY KEY,
    type INT NOT NULL,
    date TEXT NOT NULL,
    product TEXT NOT NULL,
    value REAL NOT NULL,
    seller_id TEXT NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES sellers(id)
);

