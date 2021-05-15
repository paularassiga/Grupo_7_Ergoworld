const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/avatars');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
          } else {
            req.fileValidationError = 'goes wrong on the mimetype';
            return cb(null, false, new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
        
    }
});

module.exports = uploadFile;