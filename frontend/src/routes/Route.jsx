import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import User1 from "../pages/User1";
import User2 from "../pages/User2";

const AppRoute = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                <Route path="/" element={<Navigate to="/User-1" replace />} />
                <Route path="/User-1" element={<User1 />} />
                <Route path="/User-2" element={<User2 />} />
                
            </Routes>
        </>
    );
};

export default AppRoute;