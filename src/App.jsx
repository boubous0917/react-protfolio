import CookAssistant from "../src/pages/CookAssistant";
import MyPortfolio from "../src/pages/MyPortfolio";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MyPortfolio />} />
        <Route path="/CookAssistant" element={<CookAssistant />} />
      </Routes>
    </>
  );
}
