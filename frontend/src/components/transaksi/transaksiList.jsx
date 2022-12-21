import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useSelector} from "react-redux"

const TransaksiList = () => {
    const [transaksi, setTransaksi] = useState([]);
    const {user} = useSelector((state) => state.auth);

     useEffect(() => {
        getTransaksi();
    }, []);

    const getTransaksi = async() => {
        const response = await axios.get('http://localhost:5001/transaksi');
        setTransaksi(response.data);
    };

    const deleteTransaksi = async(transaksiId) => {
        await axios.delete(`http://localhost:5001/transaksi/${transaksiId}`);
        getTransaksi();
    };


  return (
    <div>
        <h1 className='title'>Transaksi</h1>
        <h2 className='subtitle'>List of Transaksi</h2>
        {user && user.role === "user" && (
        <Link to="/transaksi/add" className='button is-primary mb-2'>Add New</Link>
        )}
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>transaksi Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stok</th>
                    <th>Created By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {transaksi.map((transaksi, index) =>(
                <tr key={transaksi.uuid}>
                    <td>{index + 1}</td>
                    <td>{transaksi.name}</td>
                    <td>{transaksi.price}</td>
                    <td>{transaksi.category}</td>
                    <td>{transaksi.stok}</td>
                    <td>{transaksi.user.name}</td>
                    <td>
                    <Link to={`/transaksi/edit/${transaksi.uuid}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteTransaksi(transaksi.uuid)} className="button is-small is-danger">Delete</button>
                    </td>
                </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default TransaksiList