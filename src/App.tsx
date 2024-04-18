import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro144 from "./pages/MacBookPro144";
import MacBookPro141 from "./pages/MacBookPro141";
import MacBookPro143 from "./pages/MacBookPro143";
import MacBookPro142 from "./pages/MacBookPro142";
import LogInPage from "./pages/LogInPage";
import PersonTypingReview from "./pages/PersonTypingReview";
import MacBookPro14 from "./pages/MacBookPro14";

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
      case "/log-in-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-5":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page-4":
        title = "";
        metaDescription = "";
        break;
      case "/person-typing-review":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page-3":
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
      <Route path="/" element={<MacBookPro144 />} />
      <Route path="/log-in-page-2" element={<MacBookPro141 />} />
      <Route path="/macbook-pro-14-5" element={<MacBookPro143 />} />
      <Route path="/log-in-page-1" element={<MacBookPro142 />} />
      <Route path="/log-in-page-4" element={<LogInPage />} />
      <Route path="/person-typing-review" element={<PersonTypingReview />} />
      <Route path="/log-in-page-3" element={<MacBookPro14 />} />
    </Routes>
  );
}
export default App;
