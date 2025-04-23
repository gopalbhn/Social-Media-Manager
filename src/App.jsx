import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/home";
import CreatePost from "./pages/createPost";
import axios from "axios";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user.atom";
import { userEmail } from "./store/selectors/user.selector";

import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [count, setCount] = useState(0);
  let themeValue = sessionStorage.getItem("theme");
  let parsedTheme = themeValue === "true";
  const [dark, setDark] = useState(parsedTheme);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    sessionStorage.setItem("theme", dark);
  }, [dark]);

  function handleToogle() {
    console.log("hello");
    setDark(!dark);
  }

  return (
    <>
      <NavBar onclick={handleToogle} dark={dark} />
      <CookiesProvider>

      <InitUser />
      </CookiesProvider>
    </>
  );
}

const InitUser = () => {
  const setUser = useSetRecoilState(userState);
  const email = useRecoilValue(userEmail);
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  
  console.log("control",email);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/routes/me", {
          headers:{
            'Authorization': `Bearer ${token}`
          },
          withCredentials:true
        });
        console.log(res);
        let data = res.data;
        console.log('data',data.user)
        if (!data) {
          setUser({
            user:null
          });
        } else {
          setUser({
            user: data.user,
          });
        }
      } catch (err) {
        setUser({
          user:null
        });
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Routes>
        
     
          <Route path="/" element={
            <PublicOnlyRoute >
              <LandingPage />

            </PublicOnlyRoute>
              } />
      
     
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<RequireAuth> <HomePage /></RequireAuth> } />
             
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
};

function RequireAuth({children}){
  const email = useRecoilValue(userEmail)
  
  return    email ? children : <Navigate to="/" />


}

const PublicOnlyRoute = ({ children }) => {
  const email = useRecoilValue(userEmail);
  return email ? <Navigate to="/home" /> : children;
};
export default App;
