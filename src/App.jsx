import "./App.css";
import CompanionPage from "./pages/CompanionPage/CompanionPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/user" element={<UserProfilePage/>} />
        <Route path="/companion" element={<CompanionPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
