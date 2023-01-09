import { getUserTutorials } from "./getUserTutorials.js";

const renderContent = async () => {
  const tutorials = await getUserTutorials();

  const sectionContainer = document.body.querySelector("#content");
  sectionContainer.replaceChildren();

  if (!tutorials.length) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  tutorials.forEach((tutorial) => {
    const { title, content } = tutorial;

    const contentContainer = document.createElement("div");
    contentContainer.className = "contentContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const titleEl = document.createElement("h2");

    const contentEl = document.createElement("p");

    titleEl.textContent = title;

    contentEl.textContent = content;

    titleContainer.append(title);

    contentContainer.append(titleContainer, content);

    sectionContainer.append(contentContainer);
  });
};

await renderContent();
