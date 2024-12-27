import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, callBackFunction) {
        callBackFunction(null, "./public/temp");
    },
    filename: function (req, file, callBackFunction) {
        callBackFunction(null, file.originalname);
        console.log("FROM MULTER FILENAME FUNCTION : ::", file);
    },
});
export const upload = multer({ storage });
