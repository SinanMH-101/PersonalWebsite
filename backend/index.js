import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
app.use(express.json());
app.use(cors());

const projects = [
    { id: 1, title: "CleanWalk", short_desc: "abc", long_desc: "xyz" },
    { id: 2, title: "CleanWalk", short_desc: "abc", long_desc: "xyz" },
    { id: 3, title: "CleanWalk", short_desc: "abc", long_desc: "xyz" },
    { id: 4, title: "CleanWalk", short_desc: "abc", long_desc: "xyz" },
    { id: 5, title: "CleanWalk", short_desc: "abc", long_desc: "xyz" }
];

app.get('/', (request, response) => {
    response.send('<h1>Main Page2</h1>')
})

app.get("/api/projects", (_req, res) => res.json(projects));


app.get("/api/projects/:id", (req, res) => {
    const id = Number(req.params.id);
    const project = projects.find(p => p.id === id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
});

app.get('/api/contact', (request, response) => {
    const id = request.params.id
    response.send(`Project ${id}`)
})



const PORT = 3001
app.listen(PORT)
console.log(`Server running on http://localhost:${PORT}/`)