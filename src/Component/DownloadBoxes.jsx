import React from "react";
import { useTranslation } from "react-i18next";


export default function Download() {
    const { t } = useTranslation();
    return (
        <div className="app">
            <p>{t('useApp')}</p>
            <div className="app-brand">
                <a href="#"><img src="image/googleplay.png" alt="google play" className="googleplay" /> </a>
                <a href="#"><img src="image/appstore.png" alt="app store" className="appstore" /></a>
            </div>
        </div>
    )
}