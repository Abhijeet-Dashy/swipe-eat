import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import FeedPage from "./pages/FeedPage";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import CreatorDashboard from "./pages/CreatorDashboard";
import UploadPage from "./pages/UploadPage";
import ExplorePage from "./pages/ExplorePage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        
        <Route element={<MobileLayout />}>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/creator" element={<CreatorDashboard />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/notifications" element={<div className="flex items-center justify-center h-full">Notifications Coming Soon</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
