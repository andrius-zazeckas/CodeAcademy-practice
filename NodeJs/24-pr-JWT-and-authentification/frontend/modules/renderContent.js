import { getContent } from "./getContent.js";

const renderContent = async () => {
  const contents = await getContent();

  const sectionContainer = document.body.querySelector("#content");
  sectionContainer.replaceChildren();

  if (!contents.length) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  contents.forEach((article) => {
    const { date, title, content } = article;

    const contentContainer = document.createElement("div");
    contentContainer.className = "contentContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const titleEl = document.createElement("h2");
    const dateEl = document.createElement("p");
    const contentEl = document.createElement("p");

    titleEl.textContent = title;
    dateEl.textContent = date.slice(0, 10);
    contentEl.textContent = content;

    titleContainer.append(title, dateEl);

    contentContainer.append(titleContainer, content);

    sectionContainer.append(contentContainer);
  });
};

await renderContent();
