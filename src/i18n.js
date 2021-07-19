import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    //وقتی خروج از اکانت میزنیم لوکال استوریج را کلیر میکنیم و شرط اینجا همیشه فا میشه پس در قسمتی که لوکال استوریج را کلیر کردیم میریم آن هایی که ست آیتم کردیم را خالی میکنیم ----یا می توان منو بالای لاگین گذاشت
    lng: localStorage.getItem("lang")? localStorage.getItem("lang"):"fa" ,
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      wait: true
    }
  })

export default i18n