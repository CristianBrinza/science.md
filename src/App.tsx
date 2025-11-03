// src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import {LanguageProvider} from "./context/LanguageContext.tsx";
const Agenda = lazy(() => import('./pages/agenda/Agenda.tsx'));
const Home = lazy(() => import('./pages/home/Home.tsx'));
const NotFound = lazy(() => import('./pages/notfound/NotFound.tsx'));
const About = lazy(() => import('./pages/about/About.tsx'));
const Contacts = lazy(() => import('./pages/contacts/Contacts.tsx'));

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollToTop from "./components/ScrollToTop.tsx";


function AppContent() {
    return (
        <>
            <ScrollToTop />
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
                    path="/:lang/"
                    element={
                        <Suspense fallback={<></>}>
                            <Home/>
                        </Suspense>
                    }
                />
                <Route
                    path="/:lang/agenda"
                    element={
                        <Suspense fallback={<></>}>
                            <Agenda />
                        </Suspense>
                    }
                />
                <Route
                    path="/:lang/about"
                    element={
                        <Suspense fallback={<></>}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="/:lang/contacts"
                    element={
                        <Suspense fallback={<></>}>
                            <Contacts />
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
