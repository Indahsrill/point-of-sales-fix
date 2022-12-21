import React, {useEffect} from 'react'
import Welcome from '../components/Welcome';
import Layout from './Layout'
import Content from "../components/Content"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getMe} from "../features/authSlice";

const Dashboard = () => {
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
    
  return(
    <Layout>
      <Welcome/>
      <Content/>
    </Layout>
  )
};

export default Dashboard;