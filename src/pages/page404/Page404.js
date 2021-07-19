import React from 'react';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
    const {t}=useTranslation();
    return (
        <div>
            <h1>404</h1>
            <h3>{t("404")}</h3>
        </div>
    );
};

export default Page404;