import Transaksi from "../models/TransaksiModel.js";


export const getTransaksi = async(req, res) => {
    try {
        const response = await Transaksi.findAll({
            attributes: ['uuid', 'kodeTransaksi', 'waktu', 'statusTransaksi', 'total'], 
        });
        res.status(200).json(response);
    }catch (error) {
        res.status(500).json({msg: error.message});
    }
};

export const getTransaksiById = async(req,res) => {
    try {
        const response = await Transaksi.findOne({
            attributes: ['uuid', 'kodeTransaksi', 'waktu', 'statusTransaksi', 'total'],
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})      
    }
};

export const createTransaksi = async (req, res) => {
    const {kodeTransaksi, waktu, statusTransaksi, total} = req.body;
    try {
        await Transaksi.create({
            kodeTransaksi: kodeTransaksi,
            waktu: waktu,
            statusTransaksi: statusTransaksi,
            total:  total
            });
            res.status(201).json({msg: 'transaksi berhasil'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateTransaksi = async(req,res) => {
    try {
        const transaksi = await Transaksi.findOne({
        where: {
            id: req.params.id,
        },
    });
        await Transaksi.update(
            {
                kodeTransaksi: kodeTransaksi,
                waktu: waktu,
                statusTransaksi: statusTransaksi,
                total
            },
            {
                where: {
                    id: transaksi.id,
                },
            }
        );
        res.status(200).json({msg: 'Update Transaksi berhasil'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteTransaksi = async (req, res) => {
    const transaksi = await deleteTransaksi.findOne({
        where: {
            id: req.params.id,
        },
    });
    if(!transaksi) return res.status(404).json({msg: 'Transaksi tidak ditemukan'});

    try {
        await Transaksi.destroy({
            where: {
                id: transaksi.id,
            },
        });
        res.status(200).json({msg: 'Delete Transaksi berhasil'});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}