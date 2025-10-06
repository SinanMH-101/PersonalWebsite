import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (request, response) => {
    response.send('<h1>Main Page2</h1>')
})

app.get('/projects', (request, response) => {
    response.send('<h1>My Projects</h1>')
})

app.get('/api/projects/:id', (request, response) => {
    const id = request.params.id
    response.send(`Project ${id}`)
})

app.get('/api/contact', (request, response) => {
    const id = request.params.id
    response.send(`Project ${id}`)
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on http://localhost:${PORT}/`)