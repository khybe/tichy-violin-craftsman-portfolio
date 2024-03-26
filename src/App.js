import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";

const ViolinPage = lazy(() => import("./Pages/ViolinPage"));
const ViolaPage = lazy(() => import("./Pages/ViolaPage"));
const CelloPage = lazy(() => import("./Pages/CelloPage"));
const GambaPage = lazy(() => import("./Pages/GambaPage"));

function App() {
  // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState("czech");

  // Function to handle language change
  function languageChangeHandler(newLanguage) {
    setSelectedLanguage(newLanguage);
  }

  return (
    <div>
      {/* Header component with language change functionality */}
      <Header
        onChangeLanguage={languageChangeHandler}
        language={selectedLanguage}
      />
      <main>
        {/* Routing for different pages */}
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              Loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={<HomePage language={selectedLanguage} />}
              exact={true}
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
              path="/violoncello"
              element={<CelloPage language={selectedLanguage} />}
            />
            <Route
              path="/violadagamba"
              element={<GambaPage language={selectedLanguage} />}
            />
          </Routes>
        </Suspense>
      </main>
      {/* Footer component */}
      <Footer language={selectedLanguage} />
    </div>
  );
}

export default App;
