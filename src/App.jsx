import { Routes, Route } from "react-router-dom";
import Layout from "./komponenter/Layout";
import Resources from "./komponenter/Resources";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>ressursarkiv.......</h1>} />
        <Route path="/html" element={<Resources category="html" />} />
        <Route path="/css" element={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category="javascript" />} />
        <Route path="/react" element={<Resources category="react" />} />
        <Route path="/sanity" element={<Resources category="headless-cms" />} />
      </Routes>
    </Layout>
  );
}

export default App;
