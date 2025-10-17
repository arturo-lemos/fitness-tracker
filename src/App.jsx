import { Routes, Route } from "react-router";

import Navbar from "./layout/Navbar.jsx";
import ActivitiesPage from "./activities/ActivitiesPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Error404 from "./Error404.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<ActivitiesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="error" element={<Error404 />} />
      </Routes>
    </>
  );
}
