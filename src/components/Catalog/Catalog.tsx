import React, {useEffect, useMemo, useState} from 'react';
import Item from "../Item/Item";
import Product from "../../productInterface/product";

import '../../style/_catalog.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import asyncFetch from "../../mixin/asyncFetch";
import {addProduct, resetProduct} from "../../store/Product/ProductActions";

interface CatalogProps {
    search: string
}

const Catalog = ({search}: CatalogProps) => {
    const [loading, setLoading] = useState(true);
    const product = useSelector((state: RootState) => state.product);
    const dispatch: AppDispatch = useDispatch();
    const url = 'https://moscow.fargospc.ru/test/json/';

        useEffect(() => {
        const data = asyncFetch<Product[]>(url);
        data.then((result) => {
            dispatch(addProduct(result));
            setLoading(false);
        });
        return () => {
            resetProduct();
        }
    }, []);

    const searchProduct = useMemo(() => {
        if (search) {
            return product.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        }
        return product;
    }, [search, product])


    return (
        <div className='catalog'>
            {
                loading
                    ? <div>Loading</div>
                    : searchProduct.map(item => <Item key={item.id} title={item.title} src={item.src}/>)
            }
        </div>
    );
};

export default Catalog;