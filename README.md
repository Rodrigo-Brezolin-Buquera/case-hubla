
## About
### Hubla! Fullstack challange - 

## Status:
<b>Concluded</b>

## Technologies used

### Frontend 
- Next.js - Typescript - ChakraUI   - Axios  - Jest - Docker

### Backend 
- Typescript - Express  - Knex - SQLite - Multer - BcryptJs - Jsonwebtoken - Uuid - Jest - Docker

## Explanatory Video


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

## Running it locally 

### With npm / node 

<h4>1º | Clone the repository </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-Green-Acesso.git

<h4>2º | Change to the backend directory via terminal: </h4>

   cd backend-hubla/

<h4>3º | Install the dependencies with: </h4>

   npm install

<h4>4º | Run the build with: </h4>

   npm run build

<h4>5º | Start the application with: </h4>

   npm run start

<h4>6º | Change to the frontend directory via terminal: </h4>

   cd ../frontend-hubla

<h4>7º | Install the dependencies with: </h4>

   npm install

<h4>8º | Run the build with: </h4>

   npm run build   

<h4>9º | Start the application with: </h4>

   npm run start
 
 <h4>10º | Access the site via browser  </h4>
<a href="http://localhost:3000/">http://localhost:3000/</a>

### With docker
<h4>1º | Clone the repository </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-Green-Acesso.git

<h4>1º | Clone the repository </h4>

    git clone https://github.com/Rodrigo-Brezolin-Buquera/Case-Green-Acesso.git

<h4>2º | Change to the backend directory via terminal: </h4>

   cd backend-hubla/

<h4>3º | Run the build with: </h4>

    docker build  -t backend .

<h5>4º | Run the the container with: </h5>

   docker run  --name backend  -p 3003:3003 backend

<h4>5º | Change to the frontend directory via terminal: </h4>

   cd ../frontend-hubla

<h4>6º | Run the build with: </h4>

    docker build  -t frontend .

<h5>7º | Run the the container with: </h5>

    docker run  --name frontend  -p 3000:3000 frontend

 <h4>8º | Access the site via browser  </h4>
<a href="http://localhost:3000/">http://localhost:3000/</a>