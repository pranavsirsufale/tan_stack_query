import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, callBackFunction) {
        callBackFunction(null, "./public/temp");
    },
    filename: function (req, file, callBackFunction) {
        callBackFunction(null, file.originalname);},
});
export const upload = multer({ storage });