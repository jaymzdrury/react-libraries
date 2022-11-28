import './wdyr'
import {createRoot} from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import App from './App';
import reportWebVitals from './reportWebVitals';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json'
        }
    })

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
reportWebVitals();
