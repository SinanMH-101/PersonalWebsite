import express, { response } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import Project from "./models/projects.js";
import WorkExp from "./models/workexp.js"

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
app.use(express.json());
app.use(cors());
app.use(express.static('dist'))

await mongoose.connect(process.env.MONGODB_URI, { dbName: 'projects' });

app.get('/', (request, response) => {
    response.send('<h1>Main Page</h1>')
})

app.get("/api/projects", (_req, res) => {
    Project.find({}).then(projects => {
        res.json(projects)
    })
});


app.get("/api/projects/:id", async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
});

app.get("/api/workexp", (_req, res) => {
    WorkExp.find({}).then(exp => {
        res.json(exp)
    })
})

app.get('/api/contact', (request, response) => {
    const id = request.params.id
    response.send(`Project ${id}`)
})



const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on http://localhost:${PORT}/`)