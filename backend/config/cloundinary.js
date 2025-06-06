import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
const uploadOnCloudinary =async (filePath)=> {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Click 'View API Keys' above to copy your Cloud name
        api_key:process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    try {
       // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(filePath)
       fs.unlinkSync(filePath) // Delete the file after upload
       return uploadResult.secure_url; // Return the secure URL of the uploaded image
    } catch (error) {
        fs.unlinkSync(filePath) // Delete the file even if upload fails
       return resizeBy.status(500).json({ message: "cloudinary error"});
    }
}
    export default uploadOnCloudinary;