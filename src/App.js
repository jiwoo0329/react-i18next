import { useEffect } from "react";
import "./App.css";

import i18n from "./language/i18n";
import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage("en");
    }, []);

    const name = { ko: "홍길동", en: "mr.Hong" };

    return (
        <div className="App">
        <h1>React로 다국어 지원 라이브러리 연습하기</h1>
        <h2>( react-i18next )</h2>

        {/* 언어 변경 버튼 */}
        <input
            type="radio"
            name="language"
            id="ko"
            onChange={() => i18n.changeLanguage("ko")}
        />
        <label htmlFor="ko">한국어</label>
        <input
            type="radio"
            name="language"
            id="en"
            onChange={() => i18n.changeLanguage("en")}
        />
        <label htmlFor="en">영어</label>

        {/* 변환할 언어 */}
        <div>
            <p>{t("testText")}</p>
            <h2>{t("hello", { name })}</h2>
        </div>
        </div>
    );
}

export default App;
