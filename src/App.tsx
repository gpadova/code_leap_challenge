import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Network from "./pages/Network";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
