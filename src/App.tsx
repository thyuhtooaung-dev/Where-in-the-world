import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";
import MainLayout from "@/layouts/MainLayout.tsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
