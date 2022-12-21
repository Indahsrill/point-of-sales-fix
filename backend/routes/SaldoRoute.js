import express from "express";
import{
    getSaldo,
    getSaldoById,
    createSaldo,
    updateSaldo,
    deleteSaldo
} from "../controllers/SaldoLogin.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router =  express.Router();

//yang di dalam slash adalah endpoint
router.get('/saldo', verifyUser, getSaldo);
router.get('/saldo/:id', verifyUser, getSaldoById);
router.post('/saldo', verifyUser, createSaldo);
router.patch('/saldo/:id', verifyUser, updateSaldo);
router.delete('/saldo/:id', verifyUser, deleteSaldo);

export default router;