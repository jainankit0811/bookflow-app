/* eslint-disable require-jsdoc */
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.js";
import HomePage from "./components/home_page/HomePage.js";
import LoginPage from "./components/login_page/LoginPage.js";
import AdminPanel from "./components/admin_panel/AdminPanel.js";
import StudentPanel from "./components/student_panel/StudentPanel.js";
import Footer from "./components/footer/Footer.js";
import QRCodeScanner from "./components/QRCodeScanner";

const theme = createTheme();

/*
 * Main component for the application.
 * @returns {JSX.Element} The rendered component.
 */
function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/qr" element={<QRCodeScanner />} /> {/* New Route */}
            <Route path="/student" element={<StudentPanel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
