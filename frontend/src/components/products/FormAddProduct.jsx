import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [stok, setStok] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/products', {
                name: name,
                price: price,
                category: category,
                stok: stok
            });
            navigate("/products");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Products</h1>
        <h2 className='subtitle'>Add new product</h2>
            <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveProduct}>
                    <p className="has-text-centered">{msg}</p>
                        <div className='field'>
                            <label className='label'>Name</label>
                            <div className="control">
                                <input type="text" 
                                className='input' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Product Name' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Price</label>
                            <div className="control">
                                <input type="text" 
                                className='input' 
                                value={price} 
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Price' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Kategori</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={category} 
                                onChange={(e) => setCategory(e.target.value)} 
                                placeholder='kategori produk' />
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Stok</label>
                            <div className="control">
                                <input 
                                type="text" 
                                className='input'
                                value={stok} 
                                onChange={(e) => setStok(e.target.value)} 
                                placeholder='Stok' />
                            </div>
                        </div>
                        <div className='field'>
                            <div className="control">
                                <button type="submit" className='button is-success'>Save</button>
                            </div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddProduct