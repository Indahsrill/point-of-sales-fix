import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useSelector} from "react-redux"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const {user} = useSelector((state) => state.auth);

     useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async() => {
        const response = await axios.get('http://localhost:5001/products');
        setProducts(response.data);
    };

    const deleteProduct = async(productId) => {
        await axios.delete(`http://localhost:5001/products/${productId}`);
        getProducts();
    };

  return (
    <div>
        <h1 className='title'>Products</h1>
        <h2 className='subtitle'>List of Products</h2>
        {user && user.role === "admin" && (
        <Link to="/products/add" className='button is-primary mb-2'>Add New</Link>
        )}
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Stok</th>
                    <th>Created By</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) =>(
                <tr key={product.uuid}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.stok}</td>
                    <td>{product.user.name}</td>
                    {user && user.role === "admin" && (
                    <td>
                    <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
                    </td>
                    )}
                    {user && user.role === "user" && (
                    <td>
                    <Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">+</Link>
                        <button onClick={()=> deleteProduct(product.uuid)} className="button is-small is-danger">-</button>
                    </td>
                    )}
                </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default ProductList