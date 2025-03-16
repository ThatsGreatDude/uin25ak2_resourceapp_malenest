import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./komponenter/Layout";
 import Resources from "./komponenter/Resources";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Ressursarkiv Test</h1>} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;