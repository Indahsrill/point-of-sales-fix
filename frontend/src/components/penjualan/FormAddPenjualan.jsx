import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const FormAddPenjualan = () => {
    const [namaCustomer, setNamaCustomer] = useState("");
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [hargaSatuan, setHargaSatuan] = useState("");
    const [diskon, setDiskon] = useState("");
    const [totalHarga, setTotalHarga] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const savePenjualan = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/penjualan', {
                namaCustomer: namaCustomer,
                productId: productId,
                quantity: quantity, 
                hargaSatuan: hargaSatuan, 
                diskon: diskon, 
                totalHarga: totalHarga
            });
            navigate("/penjualan");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h2 className='title'>Penjualan</h2>
            <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={savePenjualan}>
                    <p className="has-text-centered">{msg}</p>
                        <div className='field'>
                            <label className='label'>Nama Customer</label>
                            <div className="control">
                                <input type="STRING" 
                                className='input' 
                                value={namaCustomer} 
                                onChange={(e) => setNamaCustomer(e.target.value)}
                                placeholder='nama customer' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Nama produk</label>
                            <div className="control">
                                <input type="STRING" 
                                className='input' 
                                value={productId} 
                                onChange={(e) => setProductId(e.target.value)}
                                placeholder='nama produk' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Quantity</label>
                            <div className="control">
                                <input type="STRING" 
                                className='input' 
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder='quantity' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Harga Satuan</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={hargaSatuan} 
                                onChange={(e) => setHargaSatuan(e.target.value)} 
                                placeholder='harga satuan' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Diskon</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={diskon} 
                                onChange={(e) => setDiskon(e.target.value)} 
                                placeholder='diskon' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Total Harga</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={totalHarga} 
                                onChange={(e) => setTotalHarga(e.target.value)} 
                                placeholder='total harga' />
                            </div>
                        </div>
                        <div className='field'>
                            <div className="control">
                                <button type="submit" className='button is-success'>Add to Transaction</button>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddPenjualan