import React, {useEffect} from 'react'
import Layout from './Layout'
import PenjualanList from '../components/penjualan/PenjualanList';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getMe} from "../features/authSlice";
import FormAddPenjualan from '../components/penjualan/FormAddPenjualan';
import FormAddTransaksi from '../components/transaksi/FormAddTransaksi';
import ProductList from '../components/products/ProductList';

const Penjualan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
        <ProductList/>
        <FormAddPenjualan/>
        <PenjualanList/>
        <FormAddTransaksi/>
    </Layout>
  )
}

export default Penjualan