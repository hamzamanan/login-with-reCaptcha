import React, { useEffect } from "react";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import Login from "../screen/Login";
import Login_1 from "../screen/Login_1";

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login_1 />} />
    </Routes>
  );
};

export default MainRouter;
