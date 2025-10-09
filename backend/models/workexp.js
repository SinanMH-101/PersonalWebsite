import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
    {
        role: String,
        company: String,
        duration: String,
        responsibilities: [String],
    },
    {  collection: 'workexps', timestamps: true }
);

workSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (_doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
    },
});

const WorkExp = mongoose.model("WorkExp", workSchema);
export default WorkExp;