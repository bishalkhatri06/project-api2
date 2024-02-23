const multer=require('multer')
const fs=require('fs')
const path=require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let fileDestination='public/uploads/'

        // check if directory exist or not
        if(!fs.existsSync(fileDestination)){
            fs.mkdirSync(fileDestination,{recursive:true})
            cb(null,fileDestination)
        }
        else{
            cb(null,fileDestination)
        }      
    },
    filename: function (req, file, cb) {
      let filename=path.basename(file.originalname,path.extname(file.originalname))

      let ext=path.extname(file.originalname)

      cb(null,filename+'_'+Date.now()+ext)
    }
  })

  const imageFilter=(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|svg|webp|JPG|JPEG|PNG|GIF|SVG|WEBP)$/)){
        return cb(new Error('You can upload image file only',false))
    }
    else{
        cb(null,true)
    }
  }

  const upload=multer({
    storage:storage,
    fileFilter:imageFilter,
    limits:{
        fileSize: 2000000  // 2mb
    }
  })

  module.exports=upload