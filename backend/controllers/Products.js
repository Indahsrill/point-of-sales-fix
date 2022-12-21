import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getProducts = async(req, res) => {
    try{
        let response;
        if(req.role === "admin" || "kasir"){
            response = await Product.findAll({
                attributes:['id','uuid', 'name', 'price','category','stok'],
                include:[{
                    model: User,
                    attributes:['id','name','email']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes:['id', 'uuid', 'name', 'price','category', 'stok'],
                where: {
                    userId: req.userId //nyari data produk berdasarkan userId, karena ini a/ FK
                },
                include:[{
                    model: User,
                    attributes:['name','email'] 
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: "error.message"});
    }
}

export const getProductById = async(req, res) => {
    try{
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin" || "kasir"){
            response = await Product.findOne({
                attributes:['uuid', 'name', 'price','category','stok'],
                where:{
                    id: product.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            })
        }else{
            response = await Product.findOne({
                attributes:['uuid', 'name', 'price','category','stok'],
                where: {
                    [Op.and]: [{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email'] 
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: "error.message"});
    }
}

export const createProduct = async(req, res) => {
    const {name, price, category, stok} = req.body;
    try{
        await Product.create({
            name: name,
            price: price,
            userId: req.userId,
            category: category,
            stok: stok
        });
        res.status(201).json({msg: "product created successfully"});
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) => {
    try{
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, price, category, stok} = req.body;
        if(req.role === "admin"){
           await Product.update({name, price, category, stok},{
                where:{
                    id:product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "akses terlarang"});
            await Product.update({name, price, category, stok}, {
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "product updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: "error.message"});
    }
}

export const deleteProduct = async(req, res) => {
    try{
        const product = await Product.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        if(req.role === "admin"){
           await Product.destroy({
                where:{
                    id:product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "akses terlarang"});
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: "error.message"});
    }
}


