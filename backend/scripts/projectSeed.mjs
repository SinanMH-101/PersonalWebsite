import mongoose from "mongoose";
import "dotenv/config";
import Project from "../models/projects.js"

await mongoose.connect(process.env.MONGODB_URI, { dbName: 'projects' });
await Project.deleteMany({});
console.log("Deleted ✔");
await Project.insertMany([
    {
        title: "Flashcard Study App",
        short_desc: "A Flashcard App Made using React + TypeScript with MobX and local persistence.",
        long_desc: `Built an interactive flashcard app with real-time flipping, deletion, and local persistence.
Developed reusable, modular React components to render and manage dynamic flashcards.
Used MobX for state management and TypeScript for type-safe component logic.
\nThis was one of my first frontend projects and so I was mainly focusing on learning how React works and decided to make something that I would atleast use from time to time.
Pretty happy with the final outcome but I do plan to eventually sync it to a databse so that I can properly use it, but for now local persistence seemed to be sufficient.`,
        tech: ["React", "TypeScript", "MobX", "Vite", "HTML"],
        link: "",
        git: "https://github.com/SinanMH-101/flashcard-study-app",
        imgPath: "assets/FlashCard.png",
        highlighted: true
    },
    {
        title: "Video Game Sales Dataset Analysis",
        short_desc: "EDA + regression/classification on global video game sales.",
        long_desc: `Conducted EDA with Pandas/NumPy to find genre preferences, regional trends, and rating correlations.
Built and evaluated Linear, Polynomial, and Logistic Regression models to predict sales figures.
Visualized trends and distributions with Matplotlib for clear insights.
\n Originally made as the final project for my Data Science (COMP2300) class. This was my first time really delving into Data Science
 and I learned a lot. The project can also be further improved with a software such as PowerBI, but the asessment required us to do it
  all on a Jupyter notebook, hence all the diagrams made with the aformentioned libraries in Python. Pretty satisfied with the projects and happy that I ended up with a HD`,
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        link: "",
        git: "https://github.com/SinanMH-101/video-game_data_analysis",
        imgPath: "",
        highlighted: false
    },
    {
        title: "CleanWalk",
        short_desc: "Flutter app for logging and sharing litter cleanups.",
        long_desc: `Enabled users to log/share cleanups with before/after photos, location tags, and descriptions.
Implemented Firebase Auth for secure sign-in; Firestore for history/stats; Storage for images.
Added customizable home screen via SharedPreferences; wrote unit/widget tests with Mockito.`,
        tech: ["Flutter", "Firebase (Auth, Firestore, Storage)", "SharedPreferences", "Mockito"],
        link: "",
        git: "https://github.com/SinanMH-101/CleanWalk",
        imgPath: "assets/CleanWalk.png",
        highlighted: true
    },
    {
        title: "Bank Account App",
        short_desc: "Java Swing desktop banking app with multi-account management.",
        long_desc: `Built a desktop banking application with a Java Swing GUI to manage multiple user accounts.
Enabled account selection via dropdown with real-time balance updates, deposits, and withdrawals.
Applied object-oriented design to encapsulate account logic and practice event-driven programming.`,
        tech: ["Java", "Swing"],
        link: "",
        git: "https://github.com/SinanMH-101/bank_app",
        imgPath: "",
        highlighted: false
    },
    {
        title: "TCP Chat App",
        short_desc: "Terminal-based multi-user chat using Python sockets and threading.",
        long_desc: `Built a simple client/server chat system with Python sockets and threads.
Server accepts multiple client connections and broadcasts messages in real time.
Added nicknames, clean terminal formatting, and graceful disconnect/error handling.
Practiced TCP/IP basics, client vs. server logic, concurrency, and debugging dropped connections & encoding issues.
How to run: start server with "python server.py", then connect clients with "python client.py".`,
        tech: ["Python", "TCP/IP"],
        link: "",
        git: "https://github.com/SinanMH-101/simple_chat_room",
        imgPath: "",
        highlighted: false
    },
    {
        title: "Personal Finance Tracker",
        short_desc: "React + TypeScript finance tracker with MobX and localStorage.",
        long_desc: `Built a personal finance tracker that lets users add income/expense transactions, calculates live balance, and persists data via localStorage.
Features include a color-coded transaction list, one-click deletion, responsive UI, and a modern React + MobX state flow.
Developed as a practice project to strengthen React, TypeScript, and MobX skills.`,
        tech: ["React", "TypeScript", "MobX", "Vite", "CSS", "LocalStorage"],
        link: "",
        git: "https://github.com/SinanMH-101/personal_finance_tracker",
        imgPath:  "assets/PersonalFinanceTracker.png",
        highlighted: true
    }
]);
console.log("Seeded ✔");
await mongoose.disconnect();
