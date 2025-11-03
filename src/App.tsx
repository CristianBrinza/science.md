// src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {LanguageProvider} from "./context/LanguageContext.tsx";
const Home = lazy(() => import('./pages/home/Home.tsx'));
const NotFound = lazy(() => import('./pages/notfound/NotFound.tsx'));

function AppContent() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/ro" replace />} />
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<></>}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<></>}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Routes>

        </>
    );
}

export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <LanguageProvider>
                    <AppContent />
                </LanguageProvider>
            </BrowserRouter>
        </I18nextProvider>
    );
}
