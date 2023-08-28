import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import EditPage from "./Components/EditPage";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/editpage" element={<EditPage />} />
      </Routes>
    </>
  )
}

export default App;
