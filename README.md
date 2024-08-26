Note Taking App
================

This is a simple note taking app built with Express and CSV-parser. It allows users to create, read, update, and delete notes stored in a CSV file.

How to Run
------------

1. Clone the repository
2. Run the command `./run.sh` to install Node, init a project, install Express, and install dependencies
3. Start the server by running `node src/index.ts`
4. Open your web browser and navigate to `http://localhost:3000`
5. Use the API endpoints to interact with the note taking app

API Endpoints
-------------

* POST /notes - Create a new note
* GET /notes - Get all notes
* GET /notes/:id - Get a note by ID
* PUT /notes/:id - Update a note
* DELETE /notes/:id - Delete a note