import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home/index";
import { useQuery } from "@tanstack/react-query";
import { Signup } from "../pages/Signup";
import Navbar from "../components/bottomNavbar/Navbar";
import { SongPage } from "../pages/SongPage";

const getUsers = () => {
  const loggedUserJSON = window.localStorage.getItem("userLogged");
  console.log("user", loggedUserJSON);
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    console.log("loggedUser", user);
    return user;
  }
};
export const AppRoutes = () => {
  const queryUserLogged = useQuery({
    queryKey: ["userLogged"],
    queryFn: async () => getUsers(),
  });

  const handleLoginSuccess = () => {
    queryUserLogged.refetch();
    console.log(queryUserLogged.data);
  };
  console.log(queryUserLogged.data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            queryUserLogged.data ? (
              <Home user={queryUserLogged.data} />
            ) : (
              <Login triggerRefetch={handleLoginSuccess} />
            )
          }
        />
        <Route path="/song/:trackId" element={SongPage}  />
        {/* <Route path="/login"
                 element={<Login />}
                 /> */}
        <Route
          path="/register"
          //  element={<Register />}
        />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
};
