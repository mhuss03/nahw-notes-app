import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import QuestionCard from "./components/QuestionCard";
import Tarkeeb from "./components/Tarkeeb";
import NavBar from "./components/NavBar";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarkeeb" element={<Tarkeeb />} />
        <Route path="/tarkeeb-practice" element={<QuestionCard />} />
        <Route path="/progress" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
