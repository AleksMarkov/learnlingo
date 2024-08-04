import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
// const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));
document.documentElement.setAttribute("data-theme", "yellow");
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
