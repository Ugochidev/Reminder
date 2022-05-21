const multer = require("multer");
const path = require("path");

// multer config options
module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./uploads`);
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("File Type is not supported", false);
      return;
    }
    cb(null, true);
  },
});
