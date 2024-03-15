import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Violin from "./Pages/Violin";
import Viol from "./Pages/Viol";
import Violoncello from "./Pages/Violoncello";
import ViolaDaGamba from "./Pages/ViolaDaGamba";
import headerData from "./Data/headerData";

import "./App.css";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("czech");

  function languageChangeHandler(newLanguage) {
    setSelectedLanguage(newLanguage);
  }

  const formatPath = (path) => {
    return path.toLowerCase().replace(/\s+/g, "");
  };

  return (
    <div className="App">
      <Header
        onChangeLanguage={languageChangeHandler}
        language={selectedLanguage}
      />
      <main>
        <Routes>
          <Route path="/" Component={Home} exact="true" />
          <Route
            path={`/${formatPath(headerData[selectedLanguage].navLinks[1])}`}
            Component={Violin}
          />
          <Route
            path={`/${formatPath(headerData[selectedLanguage].navLinks[2])}`}
            Component={Viol}
          />
          <Route
            path={`/${formatPath(headerData[selectedLanguage].navLinks[3])}`}
            Component={Violoncello}
          />
          <Route
            path={`/${formatPath(headerData[selectedLanguage].navLinks[4])}`}
            Component={ViolaDaGamba}
          />
        </Routes>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
