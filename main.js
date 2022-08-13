import articles from "./data.js";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let root = document.querySelector(":root");
let toggleBtn = document.querySelector("header button");

toggleBtn.addEventListener("click", (e) => {
  root.classList.toggle("dark-theme");
});

createArticles(articles);

function createArticles(articles) {
  articles.forEach((art) => {
    let date = art.date;
    let dayDate = date.getDate().toString().endsWith("2")
      ? `${date.getDate()}nd`
      : `${date.getDate()}th`;
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let articleContainer = document.createElement("div");
    articleContainer.className = "article";
    articleContainer.id = `${art.id}`;

    let articleHead = document.createElement("h1");
    articleHead.innerHTML = `${art.title}`;

    let articleTilte = document.createElement("p");
    articleTilte.className = `title`;
    articleTilte.innerHTML = `${month} ${dayDate}, ${year}<span>${art.length} min read</span>`;

    let articleContent = document.createElement("p");
    articleContent.className = `content`;
    articleContent.innerHTML = `${art.snippet}`;

    articleContainer.appendChild(articleHead);
    articleContainer.appendChild(articleTilte);
    articleContainer.appendChild(articleContent);
    document.querySelector(".articles").appendChild(articleContainer);
  });
}
