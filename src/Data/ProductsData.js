import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseUrl = "https://dummyjson.com/products";

export default function ProductsData() {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setProducts(response.data.products);
          console.log(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
     
    }, []);

  
    return [products];
}
