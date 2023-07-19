import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Splash from "./pages/Splash";
import HomeList from "./pages/HomeList";
import Splash1 from "./pages/Splash1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-list":
        title = "";
        metaDescription = "";
        break;
      case "/splash":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home-list" element={<HomeList />} />
      <Route path="/splash" element={<Splash1 />} />
    </Routes>
  );
}
export default App;
