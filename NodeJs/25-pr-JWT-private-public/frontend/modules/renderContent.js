import { getContent } from "./getContent.js";

const renderContent = async () => {
  const tutorials = await getContent();

  const sectionContainer = document.body.querySelector("#content");
  sectionContainer.replaceChildren();

  if (!tutorials.length) {
    const noDataEl = document.createElement("h2");
    noDataEl.textContent = "No data in database";

    sectionContainer.append(noDataEl);
  }

  tutorials.forEach((tutorial) => {
    const { title, content } = tutorial;
    let isPrivate = tutorial.isPrivate;

    const contentContainer = document.createElement("div");
    contentContainer.className = "contentContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const titleEl = document.createElement("h2");

    const contentEl = document.createElement("p");

    const privateEl = document.createElement("p");

    titleEl.textContent = title;

    contentEl.textContent = content;

    if (!isPrivate) {
      isPrivate = "no";
    } else {
      isPrivate = "yes";
    }

    privateEl.textContent = `Is it private: ${isPrivate}`;

    titleContainer.append(title);

    contentContainer.append(titleContainer, contentEl, privateEl);

    sectionContainer.append(contentContainer);
  });
};

await renderContent();
