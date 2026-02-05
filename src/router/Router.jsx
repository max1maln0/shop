import {Routes, Route, Navigate} from "react-router-dom";

import HomePage from '@pages/HomePage';
import CatalogPage from '@pages/CatalogPage';
import AboutPage from '@pages/AboutPage';

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}