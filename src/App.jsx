import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import QuestionCard from "./components/QuestionCard";
import Tarkeeb from "./components/Tarkeeb";
import NavBar from "./components/NavBar";
import ComingSoon from "./components/ComingSoon";
import Vocab from "./components/Vocab";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/nahw-notes-app/" element={<Home />} />
        <Route path="/nahw-notes-app/tarkeeb" element={<Tarkeeb />} />
        <Route path="/nahw-notes-app/vocabulary" element={<Vocab />} />
        <Route
          path="/nahw-notes-app/tarkeeb-practice"
          element={<QuestionCard />}
        />
        <Route path="/nahw-notes-app/progress" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
