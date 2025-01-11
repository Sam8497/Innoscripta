### Project Setup and Dockerization
1. Clone the Repository:

    git clone https://github.com/Sam8497/Innoscripta
    cd innoscripta

2. Install Docker:

    Ensure Docker is installed on your machine. You can download it from Docker's official website.

3. Build the Docker Image:

    `docker build -t innoscripta`

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

    `docker stop <container_id_or_name>`

# Run locally 

** Use node version 21 **

1. check `node` is present in the system if not install `node`

2. go to the code directory and run `npm install`

3. enter `npm run dev` to run the local server
