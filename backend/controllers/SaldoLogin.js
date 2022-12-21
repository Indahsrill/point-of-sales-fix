import SaldoModel from "../models/SaldoModel.js";

export const getSaldo = async(req, res) => {
    try {
        const response = await Saldo.findAll({
          attributes: ['uuid', 'waktu', 'userId', 'jumlahSaldo'],
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
};

export const getSaldoById = async(req,res) => {
    try {
        const response = await Saldo.findOne({
          attributes: ['uuid', 'waktu', 'userId', 'jumlahSaldo'],
          where: {
            uuid: req.params.id,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
};

export const createSaldo = async(req,res) =>{
    const {waktu, userId, jumlahSaldo} = req.body;
    try {
      await Saldo.create({
        waktu: waktu,
        userId: userId,
        jumlahSaldo: jumlahSaldo
      });
      res.status(201).json({ msg: 'Laporan saldo berhasil dibuat' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
}

export const updateSaldo = async(req,res) => {
    const saldo = await Saldo.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      try {
        await saldo.update(
          {
            waktu: waktu,
            userId: userId,
            jumlahSaldo: jumlahSaldo
          },
          {
            where: {
              id: saldo.id,
            },
          }
        );
        res.status(200).json({ msg: 'Update Saldo Berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
}

export const deleteSaldo = async(req,res) => {
    const saldo = await Saldo.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      if (!saldo) return res.status(404).json({ msg: 'Laporan saldo tidak ditemukan' });
    
      try {
        await Saldo.destroy({
          where: {
            id: saldo.id,
          },
        });
        res.status(200).json({ msg: 'Delete Laporan saldo berhasil' });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
};