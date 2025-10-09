// models/project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        short_desc: String,
        long_desc: String,
        imgPath : String,
        highlighted: { type: Boolean, default: false },
    },
    { collection: 'projects', timestamps: true }
);

projectSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
    },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;