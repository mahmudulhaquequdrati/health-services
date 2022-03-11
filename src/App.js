import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AdminRoute from "./routes/AdminRoute";
import PrivateRoute from "./routes/PrivateRoute";
import About from "./views/pages/about/About";
import Appointments from "./views/pages/appointment/Appointments";
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";
import Blogs from "./views/pages/Blogs/Blogs";
import Contact from "./views/pages/contact/Contact";
import AllAppointments from "./views/pages/dashboard/allAppointments/AllAppointments";
import AllPatients from "./views/pages/dashboard/allPatients/AllPatients";
import AppointmentDashboard from "./views/pages/dashboard/AppointmentDashboard";
import Dashboard from "./views/pages/dashboard/Dashboard";
import DashboardHome from "./views/pages/dashboard/dashboardHome/DashboardHome";
import MakeAdmin from "./views/pages/dashboard/makeAdmin/MakeAdmin";
import NotFound404 from "./views/pages/NotFound/NotFound";
import Payment from "./views/pages/Payment/Payment";
import TheLayout from "./views/pages/TheLayout";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TheLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointments />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/payment/:appointmentID"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/allPatients"
              element={
                <AdminRoute>
                  <AllPatients />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/dashboard/makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="/dashboard/allAppointments"
              element={
                <AdminRoute>
                  <AllAppointments />
                </AdminRoute>
              }
            ></Route>
            <Route
              path="appointment"
              element={
                <PrivateRoute>
                  <AppointmentDashboard />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          {/* <Route
            path="/dashboard/appointment"
            element={
              <PrivateRoute>
                <AppointmentDashboard />
              </PrivateRoute>
            }
          ></Route> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="*" element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
