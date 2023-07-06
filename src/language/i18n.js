import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

i18n
.use(initReactI18next) // il8n을 react-il8next로 전달
.init({ // 초기화(?)
    resources: {
        en: {
            translation: en,
        },
        ko: {
            translation: ko,
        },
    },
    lng: "ko-KR",
    fallbackLng: {
        "ko-KR": ["ko-KR"],
        default: ["en-US"],
    },
    debug: true,
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
});

export default i18n;