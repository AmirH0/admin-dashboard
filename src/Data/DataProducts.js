import axios from "axios";
import React, { useEffect, useState } from "react";

const baseUrl = "https://dummyjson.com/products";

export default function DataProducts() {
    const [dataProd, setDataprod] = useState();

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setDataprod(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
     
    }, []);
  
    return [dataProd];
}
