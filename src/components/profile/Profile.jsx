import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import AuthContext from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { users } = useContext(UserContext);
  // const [inf , setInf] = UserProfile()
  const { inf, setInf, auth } = useContext(AuthContext);

  // useEffect(() => {
  //  console.log(inf)
  // },[inf]);

  return (
    <div>
      {auth ? (
        <>
          {inf ? (
            <div className="flex flex-col justify-center items-center gap-10 sm:flex-row">
              <div className=" w-44 ">
                <img
                  src={inf.image}
                  alt=""
                  className=" rounded-full w-full bg-slate-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>user ID:</p> {inf.id}
                </div>
                <div>
                  <p>user UserName:</p> {inf.username}
                </div>
                <div>
                  <p>user firstName:</p> {inf.firstName}
                </div>
                <div>
                  <p>user LastName:</p> {inf.lastName}
                </div>
                <div>
                  <p>user Email:</p> {inf.email}
                </div>
                <div>
                  <p>user Password:</p> {inf.password}
                </div>
                <div>
                  <p>user Phone:</p> {inf.phone}
                </div>
                <div>
                  <p>user Age:</p> {inf.age}
                </div>
              </div>
            </div>
          ) : (
            <h1>lodaing</h1>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
