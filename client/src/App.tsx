import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./components/Info/Info";
import Contact from "./pages/Contact"
import Navbar from "./components/Nav/Nav";
import About from "./pages/About"
import Articles from "./pages/Articles";
import ArticlesPlan from "./pages/ArticlesPlan";
import LandingPage from "./pages/LandingPage";
import Social from "./components/Social/Social"
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<ProtectedRoute />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="/article-plans" element={<ProtectedRoute />}>
          <Route path="/article-plans" element={<ArticlesPlan />} />
          <Route path="/article-plans" element={<Info />} />
          <Route path="/article-plans" element={<Social />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;