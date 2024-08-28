import project1 from "../../assets/projects/CA.png";
import project2 from "../../assets/projects/react.svg";

export const HERO_CONTENT =
  "我是一位前端工程師，畢業於私立世新大學資管系，目前僅有 1 年的設計及開發經驗，我熱衷於前端工程的開發以及設計，並努力嘗試各種不同框架以及開發模式，利用UI的優化及互動性促使使用者體驗起來更加有趣及實用。";

export const ABOUT_TEXT =
  "我曾經運用過React.js的框架設計了畢業專題的網頁並且榮獲優等成績，在實習階段也有用ASP.NET MVC的架構開發後台系統的程式，也做過Flutter的App前端設計以及Firebase的應用，目前多以前端的設計開發以及後端API的串接為主，目前做過的專案及開發的技術包含React.js、Node.js、MySQL、Restful API、C#、ASP.NET MVC等，樂於學習新穎的前端技術，不吝於傳統的限制，喜歡團隊開發，也有個人獨立作業能力，面對挑戰會面對並去解決。";

export const EXPERIENCES = [
  {
    year: "2023 6月 - 2023 11月",
    role: "前端工程師",
    company: "凱爾斯科技股份有限公司",
    descriptions:
      "開發一款APP，主要在App使用Flutter設計雙平台(iOS、Android)的前端介面，並完成後端Restful API的串接，以及運用Firebase達到第三方協助處理帳號的驗證，另外有GCP(Google Cloud Platform)的操作以及實機測試。",
    technologies: ["Flutter", "Firebase", "Restful API", "Git"],
  },
  {
    year: "2023 2月 - 2023 5月",
    role: "IT實習生",
    company: "統一資訊股份有限公司",
    descriptions:
      "我在任職期間，以教育訓練及協助公司開發程式為主，教育訓練內容中主軸是在教學ASP.NET所需的技能，額外有學習Vue.js以及Java等程式的運用。而在公司的分組是在幫忙開發後台管理系統內的查詢程式，以ASP.NET MVC架構並用C#配合MS SQL查詢所需之資料，呈現至網頁上完成功能開發。",
    technologies: ["ASP.NET MVC", "C#", "MS SQL", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Cook Assistant營運管理系統",
    image: project1,
    descriptions:
      "一套涵蓋客人點餐、員工管理以及後臺管理三大系統的營運管理系統。",
    technologies: [
      "React",
      "Node.js",
      "HTML",
      "SCSS",
      "MySQL",
      "Express.js",
      "Redux",
      "RestfulAPI",
    ],
  },
  {
    title: "個人網站設計",
    image: project2,
    descriptions: "製作一個屬於自己的網站，以展示自己的作品及以及技能和簡述。",
    technologies: ["React", "CSS", "Tailwind", "Framer motion"],
  },
];

export const CONTACT = {
  email: "dakkt345@gmail.com",
  phoneNo: "+886 918337365",
  lineID: "dakkt55",
};
