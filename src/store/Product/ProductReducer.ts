import {createSlice} from "@reduxjs/toolkit";
import {addProduct, resetProduct} from "./ProductActions";
import Product from "../../productInterface/product";

const initialState: Product[] = [];

const productReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addProduct, (state, action) => {
                return action.payload;
            })
            .addCase(resetProduct, (state, action) => {
                return initialState;
            })
    }
});

export default productReducer.reducer;
