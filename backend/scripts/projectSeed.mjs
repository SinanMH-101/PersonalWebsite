import mongoose from "mongoose";
import "dotenv/config";

const projectSchema = new mongoose.Schema({
    title: String, short_desc: String, long_desc: String, highlighted: Boolean,
});
const Project = mongoose.model("Project", projectSchema);

await mongoose.connect(process.env.MONGODB_URI);
await Project.deleteMany({});
await Project.insertMany([
    {
        title: "Flashcard Study App",
        short_desc: "React + TypeScript flashcards with MobX and local persistence.",
        long_desc: `Built an interactive flashcard app with real-time flipping, deletion, and local persistence.
Developed reusable, modular React components to render and manage dynamic flashcards.
Used MobX for state management and TypeScript for type-safe component logic.`,
        highlighted: false
    },
    {
        title: "Video Game Sales Dataset Analysis",
        short_desc: "EDA + regression/classification on global video game sales.",
        long_desc: `Conducted EDA with Pandas/NumPy to find genre preferences, regional trends, and rating correlations.
Built and evaluated Linear, Polynomial, and Logistic Regression models to predict sales figures.
Visualized trends and distributions with Matplotlib for clear insights.`,
        highlighted: false
    },
    {
        title: "CleanWalk",
        short_desc: "Flutter app for logging and sharing litter cleanups.",
        long_desc: `Enabled users to log/share cleanups with before/after photos, location tags, and descriptions.
Implemented Firebase Auth for secure sign-in; Firestore for history/stats; Storage for images.
Added customizable home screen via SharedPreferences; wrote unit/widget tests with Mockito.`,
        highlighted: true
    }
]);
console.log("Seeded ✔");
await mongoose.disconnect();
