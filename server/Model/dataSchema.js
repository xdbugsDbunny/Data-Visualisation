import mongoose from "mongoose";

const dataSchema=new mongoose.Schema({

    end_year: Number,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year:Number,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood:Number
});

const Data = mongoose.model('samples',dataSchema);

export default Data;