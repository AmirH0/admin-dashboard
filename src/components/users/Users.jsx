import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Users() {
  const { users } = useContext(UserContext);
  const { auth } = useContext(AuthContext);

  // const [users, setusers] = UserData();
  const [alluser, setAlluser] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // console.log(users);
    // const res =users.filter((resp) => resp.id < 20);
    setAlluser(users);
    // console.log(alluser);
  }, [users]);

  function getFullName(params) {
    return `${params.row.firstName || ""} ${params.row.lastName || ""}`;
  }

  const columns = [
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
      valueGetter: getFullName,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  function searchName(event) {
    setUserName(event.target.value);
    const res = users.filter(
      (resp) =>
        resp.username
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        resp.firstName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setAlluser(res);
  }

  const removeUSer = (e) => {
    axios
      .delete(`https://dummyjson.com/users/${e.target.dataset.ui}`)
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
          <table className="table-auto border-collapse border border-slate-600 w-full text-center">
            <thead>
              <tr>
                <th className="border border-slate-600">ID</th>
                <th className="border border-slate-600">Artist</th>
                <th className="border border-slate-600">UserName</th>
                <th className="border border-slate-600">Year</th>
                <th className="border border-slate-600"></th>
              </tr>
            </thead>
            <tbody>
              {alluser ? (
                <>
                  {alluser.map((res) => {
                    return (
                      <tr key={res.id}>
                        <td className="border border-slate-600">{res.id}</td>
                        <td className="border border-slate-600">
                          {res.firstName}
                        </td>
                        <td className="border border-slate-600">
                          {res.username}
                        </td>
                        <td className="border border-slate-600">{res.email}</td>
                        {/* <td className="border border-slate-600">
                      <Checkbox></Checkbox>
                    </td> */}
                        <td className="border border-slate-600 py-2">
                          <button
                            data-ui={res.id}
                            className="bg-red-600 py-2 px-6 rounded-md"
                            onClick={(e) => removeUSer(e)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <h1>Loading ...</h1>
              )}
            </tbody>
          </table>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
