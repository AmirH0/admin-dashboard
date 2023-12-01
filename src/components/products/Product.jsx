import React, { useContext, useEffect, useState } from "react";
import ProductsData from "../../Data/ProductsData";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Product() {
  const [prod, setpruc] = ProductsData();
  const [allprod, setAllprod] = useState([]);
  const [userName, setUserName] = useState("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    // console.log(prod);
    // const res =users.filter((resp) => resp.id < 20);
    setAllprod(prod);
    // console.log(allprod);
  }, [prod]);

  function searchName(event) {
    setUserName(event.target.value);
    const res = prod.filter(
      (resp) =>
        resp.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        resp.brand.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setAllprod(res);
  }

  const removeUSer = (e) => {
    axios
      .delete(`https://dummyjson.com/products/${e.target.dataset.ui}`)
      .then((response) => {
        console.log(response);
        alert("deleted");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {auth ? (
        <>
          <div className=" flex justify-between items-center p-4">
            <div className="input-container">
              <p>search by name : </p>
              <input
                className=" border border-black "
                type="text"
                onChange={(event) => searchName(event)}
                value={userName}
              />
            </div>
          </div>
          <div className="flex flex-col  gap-3 ">
            {allprod ? (
              <>
                {allprod.map((res) => {
                  return (
                    <div className="flex flex-col w-full border-b border-black p-3 gap-4" key={res.id}>
                      <div className="flex  justify-between items-center">
                        <div className="grid grid-cols-2 basis-4/6 gap-4">
                          <p className=" text-1xl"> id :{res.id}</p>
                          <p className=" text-1xl"> price :{res.price}</p>
                          <p className=" text-1xl"> title :{res.title}</p>
                          <p className=" text-1xl"> brand :{res.brand}</p>
                        </div>
                        <div className="flex flex-col basis-2/6  flex-1">
                          <p className=" text-lg">description :</p>
                          <p>{res.description}</p>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="grid grid-cols-3 gap-3 w-1/2">
                          <div>
                            <img
                              src={res.images[0]}
                              alt=""
                              className=" w-full"
                            />
                          </div>
                          <div>
                            <img
                              src={res.images[1]}
                              alt=""
                              className=" w-full"
                            />
                          </div>
                          <div>
                            <img
                              src={res.images[2]}
                              alt=""
                              className=" w-full"
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-1/2 gap-2">
                          <button
                            data-ui={res.id}
                            className="bg-red-600 py-2 px-6 rounded-md"
                            onClick={(e) => removeUSer(e)}
                          >
                            Delete
                          </button>
                          <button
                            data-ui={res.id}
                            className="bg-green-600 py-2 px-6 rounded-md"
                            onClick={(e) => removeUSer(e)}
                          >
                            edit
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
