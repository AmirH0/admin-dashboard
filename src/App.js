import { useRoutes } from "react-router-dom";
import "./App.css";
import Data from "./Data/Data";
import AllRoutes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserData from "./Data/UserData";
import { UserContext } from "./context/Context";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const route = useRoutes(AllRoutes);
  const [users, setUsers] = UserData();

  return (
    <div className="App ">
      <UserContext.Provider value={{ users, setUsers }}>
        <AuthProvider>
          <div className="">
            {" "}
            <Navbar />
          </div>
          <div className="flex py-10">
            <div className="basis-3/12 border-r-2 border-neutral-900">
              <Sidebar />
            </div>
            <div className=" basis-9/12  p-4 w-full">{route}</div>
          </div>
        </AuthProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
