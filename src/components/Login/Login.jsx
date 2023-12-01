import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/Context";
import AuthContext from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const Loginurl = "https://dummyjson.com/users";

export default function Login() {
  const { users } = useContext(UserContext);
  const { inf, setInf, setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState();

  useEffect(() => {
    // userRef.current.focus();
    setErrMsg();
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = users.find((ser) => {
      return ser.username == user && ser.password == password;
    });
    console.log(res);
    if (res) {
      setUser("");
      setPassword("");
      setSuccess(true);
      setInf(res);
      setAuth(true);
      //   <Navigate to="/" replace={true} />
    }

    // axios
    //   .get(Loginurl)
    //   .then((response) => {

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      {success ? (
        <>
          <div className=" bg-green-500 py-2 px-20">Login IN success</div>
          <Navigate to="/profile" />;
        </>
      ) : (
        <>
          <p ref={errRef} className={errorMsg ? " d" : "f"}>
            {errorMsg}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-start gap-4"
          >
            <label htmlFor="user">username:</label>
            <input
              type="text"
              id="user"
              autoComplete="off"
              ref={userRef}
              className="p-2 h-10 outline-none border
         border-black rounded-md"
              onChange={(event) => setUser(event.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">password:</label>
            <input
              type="text"
              id="password"
              //   ref={userRef}
              className="p-2 h-10 outline-none border
         border-black rounded-md"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
            <button className="border border-black rounded-full py-2 px-5">
              Sign In
            </button>
          </form>
        </>
      )}
      <p className="pt-10">
        password: 9uQFF1Lh <br />
        username: atuny0
      </p>
    </div>
  );
}
