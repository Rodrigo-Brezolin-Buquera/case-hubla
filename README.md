
## About
### Hubla! Fullstack challange - 

## Status:
<b>Concluded</b>

## Technologies used

### Frontend 
- Next.js - Typescript - ChakraUI   - Axios  - Jest - Docker

### Backend 
- Typescript - Express  - Knex - SQLite - Multer - BcryptJs - Jsonwebtoken - Uuid - Jest - Docker

## Running it locally 

## With npm / node 


### Frontend
<h4>1º | Clone the repository </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-Green-Acesso.git

<h4>2º | Change to the frontend directory via terminal: </h4>

   cd ../frontend-hubla

<h4>3º | Install the dependencies with: </h4>

   npm install

<h4>4º | Start the application with: </h4>

   npm run start
 
 <h4>5º | Access the site via browser  </h4>
<a href="http://localhost:3000/">http://localhost:3000/</a>

### With docker
<h4>1º | Clone the repository </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-Green-Acesso.git


## API Documentation 

<a href="https://documenter.getpostman.com/view/18571104/2s93Y6tKRP
">https://documenter.getpostman.com/view/18571104/2s93Y6tKRP
</a>

## Features
 ###  Frontend 
    - Login
    - Sending the file
    - Search for all sellers
    - Search for all transactions
    - Some unit tests
###  Backend 
    - Login endpoint
    - Receive and normalize the file, and adding the sellers and  transactions into the database
    - Finding all sellers
    - Finding all transactions
    - Finding a seller with its tranasctions
    - Some unit tests

## Attention points:

    - Unit tests with low converage 
    - The is no token verification in the endpoint
    - The API does not validate whether the sellers or transactions already exist, so adding the same file will duplicate their entries but with different IDs.

