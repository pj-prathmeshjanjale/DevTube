const mongoose = require('mongoose');
require('dotenv').config();

// Schema definition
const videoSchema = new mongoose.Schema({
    status: String,
    thumbnailUrl: String
}, { timestamps: true, strict: false });

const Video = mongoose.model("Video", videoSchema);

async function fixVideos() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to DB...");

        // 1. Mark 'Uploading' videos as 'Finished'
        const resultStatus = await Video.updateMany(
            { status: 'Uploading' },
            { $set: { status: 'Finished' } }
        );
        console.log(`Updated ${resultStatus.nModified} videos to 'Finished' status.`);

        // 2. Set distinct placeholder thumbnail if missing
        const placeholder = "https://ik.imagekit.io/demo/default-image.jpg"; // Generic placeholder
        const resultThumb = await Video.updateMany(
            { $or: [{ thumbnailUrl: { $exists: false } }, { thumbnailUrl: "" }] },
            { $set: { thumbnailUrl: placeholder } }
        );
        console.log(`Updated ${resultThumb.nModified} videos with placeholder thumbnail.`);

    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
        console.log("Done.");
    }
}

fixVideos();
