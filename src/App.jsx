import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProfileSetup from "./pages/ProfileSetup";
import Preparation from "./pages/Preparation";
import Questions from "./pages/Questions";
import MockInterview from "./pages/MockInterview";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <main className="page-container">{children}</main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
      <Route path="/profile" element={<AppLayout><ProfileSetup /></AppLayout>} />
      <Route path="/preparation" element={<AppLayout><Preparation /></AppLayout>} />
      <Route path="/questions" element={<AppLayout><Questions /></AppLayout>} />
      <Route path="/mock-interview" element={<AppLayout><MockInterview /></AppLayout>} />
      <Route path="/analytics" element={<AppLayout><Analytics /></AppLayout>} />
      <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
