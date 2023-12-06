import React from "react";
import { useTranslation } from "react-i18next";

export default function Policy() {
    const { t } = useTranslation();
    return (
        <>
            <div className="information">
                <span>{t('infoText')}</span><br /> <br />
            </div>
            <div className="policy">
                <span>{t('policyText')}</span>
            </div>
        </>
    )
}