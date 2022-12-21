import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const PenjualanList = () => {
    const [penjualan, setPenjualan] = useState([]);

     useEffect(() => {
        getPenjualan();
    }, []);

    const getPenjualan = async() => {
        const response = await axios.get('http://localhost:5001/penjualan');
        setPenjualan(response.data);
    };

    const deletePenjualan = async(penjualanId) => {
        await axios.delete(`http://localhost:5001/penjualan/${penjualanId}`);
        getPenjualan();
    };

  return (
    <div>
        <h1 className='title'>Penjualan</h1>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Customer</th>
                    <th>Produk</th>
                    <th>Quantity</th>
                    <th>Harga Satuan</th>
                    <th>Diskon</th>
                    <th>Total Harga</th>
                </tr>
            </thead>
            <tbody>
                {penjualan.map((penjualan, index) =>(
                <tr key={penjualan.uuid}>
                    <td>{index + 1}</td>
                    <td>{penjualan.namaCustomer}</td>
                    <td>{penjualan.productId}</td>
                    <td>{penjualan.quantity}</td>
                    <td>{penjualan.hargaSatuan}</td>
                    <td>{penjualan.diskon}</td>
                    <td>{penjualan.totalHarga}</td>
                    <td>
                    <Link to={`/transaksi`} className="button is-small is-info">add to transaksi</Link>
                        <button onClick={()=> deletePenjualan(penjualan.id)} className="button is-small is-danger">Delete</button>
                    </td>
                </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default PenjualanList