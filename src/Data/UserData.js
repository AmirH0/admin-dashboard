import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const baseUrl = "https://dummyjson.com/users";
export default function UserData() {
    const [userData, setUserData] = useState();

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
          setUserData(response.data.users);
          console.log(response.data.users);
        })
        .catch((error) => {
          console.log(error);
        });
     
    }, []);

  
    return [userData];
}
