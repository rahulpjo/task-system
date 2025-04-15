import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
