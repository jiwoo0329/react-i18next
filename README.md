# react-i18next
react-i18next 라이브러리 적용 연습

2가지 version 존재(브랜치를 통해 나눔)
- react-mode: React.js
- next-mode: Next.js

< react-version >

1. react-i18next 다운로드
-> npm install react-i18next i18next --save

2. src 폴더 안에 language 폴더 생성 후 i18n.js 파일 작성

3. language 폴더에 en.json 과 ko.json 파일을 작성

4. 사용할 컴포넌트에서 useTranslation 불러오기
->  import { useTranslation } from "react-i18next";
    const { t } = useTranslation(); 