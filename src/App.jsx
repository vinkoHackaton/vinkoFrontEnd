import "./App.css";
import CompanionPage from "./pages/CompanionPage/CompanionPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrandingPage from "./pages/BrandingPage/BrandingPage";
import CompanionForm from "./features/companionForm/CompanionForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/user" element={<UserProfilePage/>} />
        <Route path="/companion/:id" element={<CompanionPage/>} />
        <Route path="/branding" element={<BrandingPage/>} />
        <Route path="/form" element={<CompanionForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
