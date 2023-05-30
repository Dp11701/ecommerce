import "./App.css";
import { Header } from "./common/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pages } from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
