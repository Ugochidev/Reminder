const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const uploadCloudinary = async (file) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(file, (err, res) => {
      if (err) return res.status(500).send("upload file error");
      console.log(res.secure_url);
      resolve({
        res: res.secure_url,
      });
    });
  });
};

module.exports = { uploadCloudinary };
