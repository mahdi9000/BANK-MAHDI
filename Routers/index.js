const router = require('express').Router();
const NasabahController = require("../controllers/nasabah")

router.get('/', NasabahController.getAllNasabahs)
router.post('/', NasabahController.createNasabah)

router.get('/:ktp', NasabahController.getNasabahByKTP)
router.put('/:id', NasabahController.editNasabahById)
router.delete('/:id', NasabahController.deleteNasabahById)

module.exports = router