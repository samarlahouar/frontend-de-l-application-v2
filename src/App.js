import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testimonials from "./Sections/Testimonials";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
          <Footer />
        </Suspense>
      </Suspense>
    </Router>
  );
}

export default App;
