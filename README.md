## Dockerization
### Dockerfile

The Dockerfile defines the steps to build the Docker image for the application.

# Step 1: Use Node.js for building the app
FROM node:21-alpine

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Step 4: Copy the application source code
COPY . .

# Step 5: Expose port 5173 for HTTP traffic
EXPOSE 5173

# Step 6: Start the application
CMD ["npm", "run", "dev"]

## Build and Run the Docker Container
1. Build the Docker Image: Open a terminal in the root directory of your project and run:

    `docker build -t innoscripta`

2. Run the Docker Container: To start a container from your image, run:
    `docker run -p 5173:5173 innoscripta`

    If using Docker Compose, you can build and run the container with:
    `docker-compose up --build`

### Project Setup and Dockerization
1. Clone the Repository:

    git clone https://github.com/Sam8497/Innoscripta
    cd innoscripta

2. Install Docker:

    Ensure Docker is installed on your machine. You can download it from Docker's official website.

3. Build the Docker Image:

    `docker build -t innoscripta .`

4. Run the Docker Container:
    
    `docker run -p 5173:5173 innoscripta`

    Alternatively, if you are using Docker Compose, run:
    
    `docker-compose up --build`

5. Access the Application:

    Open your web browser and go to http://localhost to see the application running.

6. Stopping the Container:

    If you started the container with Docker Compose, stop it using:
    
    `docker-compose down`

    If you started the container directly, find the container ID with:
    
    `docker ps`

    Then stop it with:

    `docker stop <container_id>`

# Run locally 

** Use node version 21 **

1. check `node` is present in the system if not install `node`

2. go to the code directory and run `npm install`

3. enter `npm run dev` to run the local server
