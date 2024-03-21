import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import ViolinPage from "./Pages/ViolinPage";
import ViolaPage from "./Pages/ViolaPage";
import CelloPage from "./Pages/CelloPage";
import GambaPage from "./Pages/GambaPage";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("czech");

  function languageChangeHandler(newLanguage) {
    setSelectedLanguage(newLanguage);
  }

  return (
    <div className="App">
      <Header
        onChangeLanguage={languageChangeHandler}
        language={selectedLanguage}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage language={selectedLanguage} />}
            exact="true"
          />
          <Route
            path="/housle"
            element={<ViolinPage language={selectedLanguage} />}
          />
          <Route
            path="/viola"
            element={<ViolaPage language={selectedLanguage} />}
          />
          <Route
            path="violoncello"
            element={<CelloPage language={selectedLanguage} />}
          />
          <Route
            path="violadagamba"
            element={<GambaPage language={selectedLanguage} />}
          />
        </Routes>
      </main>
      <Footer language={selectedLanguage} />
    </div>
  );
}

export default App;
