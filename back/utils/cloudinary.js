import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //? file has been uploaded successfully
        return response;
    } catch (error) {
        console.log("ERROR OCCURED WHILE UPLOADING ON CLOUDINARY ::: ", error);
        // remove the locally saved file as the uplod operaiton done
        fs.unlinkSync(localFilePath);
    } finally {
        fs.unlinkSync(localFilePath);
    }
};

export { uploadOnCloudinary };
