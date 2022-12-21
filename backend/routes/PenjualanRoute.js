import express from 'express';
import { 
    getPenjualan, 
    getPenjualanById, 
    createPenjualan, 
    updatePenjualan, 
    deletePenjualan
} from '../controllers/Penjualan.js';

const router = express.Router();

router.get('/penjualan', getPenjualan);
router.get('/penjualan/:id', getPenjualanById);
router.post('/penjualan', createPenjualan);
router.patch('/penjualan/:id', updatePenjualan);
router.delete('/penjualan/:id', deletePenjualan);

export default router;
