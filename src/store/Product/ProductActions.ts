import {createAction} from "@reduxjs/toolkit";
import Product from "../../productInterface/product";

const addProduct = createAction<Product[]>('addProduct');
const resetProduct = createAction('resetProduct');

export {
    addProduct,
    resetProduct
}