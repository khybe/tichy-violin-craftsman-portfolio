import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Violin from "./Pages/Violin";
import Viol from "./Pages/Viol";
import Violoncello from "./Pages/Violoncello";
import ViolaDaGamba from "./Pages/ViolaDaGamba";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/housle" Component={Violin} />
          <Route path="/viola" Component={Viol} />
          <Route path="/violoncello" Component={Violoncello} />
          <Route path="/violadagamba" Component={ViolaDaGamba} />
        </Routes>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
