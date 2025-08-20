import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import PostDetail from "./pages/PostDetail";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}
