const populateListings = (listings) => {
  const listingsContainer = document.querySelector("#listingsContainer");

  listings.forEach((listing) => {
    const container = document.createElement("div");
    container.setAttribute = ("id", "container");
    container.style.width = "220px";
    container.style.height = "340px";
    container.style.boxShadow = "0px 5px 9px 0px rgba(0,0,0,0.66)";

    const textContainer = document.createElement("div");
    textContainer.setAttribute = ("id", "textContainer");
    textContainer.style.padding = "10px";

    const img = document.createElement("img");
    img.src = listing.image;
    img.style.width = "100%";

    const city = document.createElement("p");
    city.innerText = listing.city;

    const description = document.createElement("p");
    description.innerText = listing.description;

    const price = document.createElement("p");
    price.style.fontWeight = "bold";
    price.style.fontSize = "20px";

    price.innerText = listing.price;

    textContainer.append(price, city, description);

    container.append(img, textContainer);

    listingsContainer.append(container);
  });
};

export { populateListings };
