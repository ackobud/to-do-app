import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/Login";
import Navigation from "./Partials/Navigations";
import { createContext, useReducer } from "react";
import { getUsersInitialData, userReducer } from "./Reducers/User";

export const UserContext = createContext();

export default function App() {
  const [userState, userDispatch] = useReducer(
    userReducer,
    getUsersInitialData
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userState, userDispatch }}>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
