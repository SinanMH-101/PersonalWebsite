import mongoose from "mongoose";
import "dotenv/config";

const workSchema = new mongoose.Schema({
    role: String,
    company: String,
    duration: String,
    responsibilities: [String],
});
const WorkExp = mongoose.model("WorkExp", workSchema);

await mongoose.connect(process.env.MONGODB_URI);
await WorkExp.deleteMany({});
await WorkExp.insertMany([
    {
        role: "Computing Drop-In-Center Staff",
        company: "Macquarie University",
        duration: `Jul 2025 - Present`,
        responsibilities: [`Provided one-on-one and small-group assistance to students in computing units, including but not limited to OOP, data structures and algorithms, web development, databases, design patterns and data science concepts.`,
            `Guided peers through debugging code, understanding concepts, and applying problem-solving strategies.`,
            `Adapted explanations to suit varying levels of technical knowledge, ensuring accessibility and clarity.`]
    },
    {
        role: "Research Intern",
        company: "Macquarie University",
        duration: "Nov 2024 - Feb 2025",
        responsibilities: [
            "Collaborated with the Director of Education to design a comprehensive Python programming curriculum adopted by 300+ students in the initial rollout.",
            "Integrated 200+ custom coding challenges in an Agile sprint-based workflow to enhance proficiency in algorithms, data structures, object-oriented programming, and problem-solving."
        ]
    },
    {
        role: "Sales Representative",
        company: "JB Hi-Fi",
        duration: "Sep 2023 - Present",
        responsibilities: [
            "Leveraged strong communication to understand client needs and deliver tailored solutions.",
            "Consistently exceeded KPIs, averaging ~140% of monthly targets and occasionally doubling them during peak periods.",
            "Analyzed sales metrics to identify trends and improve engagement strategies, contributing to a 20%+ increase in customer satisfaction."
        ]
    },
]);
console.log("Seeded ✔");
await mongoose.disconnect();
