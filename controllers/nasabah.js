const {Nasabah} = require('../models')

class NasabahController{
    static async getAllNasabahs (req, res) {
        try {
            const nasabahs = await Nasabah.findAll()
            console.log(nasabahs);

            res.status(200).json(nasabahs)
            console.log("jalan cok");
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }

    static async createNasabah (req, res) {
        try {
            const {name, address, birthPlace, birthDate, ktp, phone} = req.body
            console.log(req.body);

            const nasabah = await Nasabah.create({
                name, address, birthPlace, birthDate, ktp, phone
            })
            console.log(nasabah);
            res.status(201).json(nasabah)
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }

    static async getNasabahByKTP (req, res) {
        try {
            const {ktp} = req.params
            const nasabah = await nasabah.findOne({
                where: {
                    ktp
                }
            })
            console.log(nasabah);
            res.status(201).json(nasabah)
            
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async editNasabahById (req, res) {
        try {
            const {id} = req.params
            const {name, address, birthPlace, birthDate, ktp, phone} = req.body

            const nasabah = Nasabah.update({
                name,address,birthPlace,birthDate,ktp,phone
            }, {
                where: {
                    id
                }
            })
            res.status(201).json(nasabah)
        } catch (err) {
            res.status(500).json(err)
            
        }
    }

    static async deleteNasabahById (req, res) {
        try {
            const {id} = req.params
            const nasabah = Nasabah.destroy({
                where: {
                    id
                }
            })

            res.status(201).json("The Data is deleted successfully")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = NasabahController