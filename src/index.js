import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { HashRouter as Router } from 'react-router-dom';

import App from './Component/App';
import './Component/style.css';



i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  })
  .then(() => {
    console.log('i18n initialized successfully!');
  })
  .catch(error => {
    console.error('Error initializing i18n:', error);
  });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

 
