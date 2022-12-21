import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormEditTransaksi = () => {
    const [kodeTransaksi, setKodeTransaksi] = useState("");
    const [waktu, setWaktu] = useState("");
    const [statusTransaksi, setStatusTransaksi] = useState("");
    const [total, setTotal] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveTransaksi = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/transaksi', {
                kodeTransaksi: kodeTransaksi,
                waktu: waktu,
                statusTransaksi: statusTransaksi,                
                total: total,
            });
            navigate("/transaksi");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Transaksi</h1>
        <h2 className='subtitle'>Add new transaksi</h2>
            <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveTransaksi}>
                    <p className="has-text-centered">{msg}</p>
                        <div className='field'>
                            <label className='label'>kodeTransaksi</label>
                            <div className="control">
                                <input type="text" 
                                className='input' 
                                value={kodeTransaksi} 
                                onChange={(e) => setKodeTransaksi(e.target.value)}
                                placeholder='kode transaksi' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>waktu</label>
                            <div className="control">
                                <input type="date" 
                                className='input' 
                                value={waktu} 
                                onChange={(e) => setWaktu(e.target.value)}
                                placeholder='waktu transaksi' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Status Transaksi</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={statusTransaksi} 
                                onChange={(e) => setStatusTransaksi(e.target.value)} 
                                placeholder='status transaksi' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Total Harga</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={total} 
                                onChange={(e) => setTotal(e.target.value)} 
                                placeholder='total harga' />
                            </div>
                        </div>
                        <div className='field'>
                            <div className="control">
                                <button type="submit" className='button is-success'>Update</button>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditTransaksi