# nodejs_login

A proof of concept on how to store and access user credentials in MongoDB.

## ToDo
- hash passwords

## Installation

### Install Git, Node.js, Docker and a nice browser

**Hint:** The specified versions are tested and ensured to work, older or newer versions may work.

- Git v2.17.1
- Node.js v14.16.0
- Docker v20.10.5
- a modern browser, like Google Chrome or Firefox

### Clone *nodejs_login* from gitHub

Clone the repository *nodejs_login* to a nice place om your machine via:

    git clone https://github.com/FabianReitz/nodejs_login.git

### Install dependencies

Install the dependencies for the server via:

    npm i

### Start the container 

Start the container with MongoDB via:

    docker compose up

### Populate the database

Execute the following command to populate the database with the test user:

    npm run populate

### Start the server

Start the server via:

    npm start

### Connect to front end

Navigate to `localhost:5000` and login with `testUser` and `1234`.

If you want to terminate the session, restart the server.