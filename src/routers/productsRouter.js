const express = require('express')
const ProductsController = require('../controllers/ProductsController')
const multerConfig = require('../utils/multerConfig')
const multer = require('multer')
const path = require('path')

const multerStorage = multer.diskStorage({
 destination: function(req, file, callback){
  callback(null, path.join(__dirname, '..', '..', 'public','images','products') )
 },
 filename: function(req, file, cb){
  const imageExtension = path.extname(file.originalname)
  const finalNameImage = `${Date.now()}${extensionImage}`
  callback(null, finalNameImage)
 }
})

const uploadImage = multer({ storage: multerStorage});


const router = express.Router()

router.get('/', ProductsController.index)
router.get('/detail/:id', ProductsController.details)
router.delete('/delete/:id', ProductsController.delete)
router.get('/edit/:id', uploadImage.single('image'), ProductsController.edit)
router.put('/edit/:id', ProductsController.update)
router.get('/create', ProductsController.create)
router.post('/', multerConfig.single('image'), ProductsController.save)

module.exports = router