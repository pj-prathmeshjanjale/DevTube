const mongoose = require('mongoose');
require('dotenv').config();

// Define minimal schema inline to avoid project dependency issues
const videoSchema = new mongoose.Schema({
    videoId: String,
    title: String,
    status: String,
    thumbnailUrl: String,
    thumbnailFileName: String,
    uid: String
}, { timestamps: true, strict: false });

const Video = mongoose.model("Video", videoSchema);

async function inspectVideos() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to DB");

        const videos = await Video.find({}).sort({ createdAt: -1 }).limit(3);

        console.log("\n--- Latest Videos (DB State) ---");
        videos.forEach(v => {
            console.log(`Title:    ${v.title}`);
            console.log(`Video ID: ${v.videoId}`);
            console.log(`Status:   ${v.status}`);
            console.log(`ThumbURL: ${v.thumbnailUrl || 'MISSING'}`);
            console.log("--------------------------------");
        });

    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

inspectVideos();
