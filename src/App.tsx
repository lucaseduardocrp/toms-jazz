import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
